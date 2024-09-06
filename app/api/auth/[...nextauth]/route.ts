import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { User } from "next-auth";
import sanitizeHtml from 'sanitize-html';

const handler = nextAuth({
    providers: [
      CredentialsProvider({
        credentials: {
          username: {label: "username", type: "text"},
          password: {label: "password", type: "password"},
          tempCaptcha: { label: "unverified captcha token", type: "hidden" }
        },
        
        async authorize(credentials: Record<string, string> | undefined): Promise<User | null> {
          if (!credentials) return null;
          
          const { username, password, tempCaptcha } = credentials;
          
          const cleanUsername = sanitizeHtml(username);
          const cleanPassword = sanitizeHtml(password);
          if (!cleanUsername || !cleanPassword) return null; 

          const secret = process.env.captcha_secret;
          const url = "https://www.google.com/recaptcha/api/siteverify?";  
          const response = await fetch(url, {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: `secret=${secret}&response=${tempCaptcha}`
          });
        
          const data = await response.json();
          if (!data.success) return null; // tempCaptcha either expired or edited

          if (cleanUsername === process.env.admin_user && cleanPassword === process.env.admin_password) {
            return {id: "1", username: cleanUsername};
          } else {
              return null;
          }
        }
      })
    ],
    session: {
      strategy: 'jwt'
    },
    pages: {
      signIn: '/post-creator/sign-in'
    },
    callbacks: {
      async session({session, token}) {
        if (token) {
          session.id = token.id;
          session.username = token.username;
        }
        return session;
      },
      async jwt({token, user}) {
        if (user) {
          token.id = user.id;
          token.username = user.username;
        }
        return token;
      }
    }
});

export {handler as GET, handler as POST};