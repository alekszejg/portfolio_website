import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { User } from "next-auth";

const handler = nextAuth({
    providers: [
      CredentialsProvider({
        credentials: {
          username: {label: "username", type: "text"},
          password: {label: "password", type: "password"},
        },
        
        async authorize(credentials:  Record<"username" | "password", string> | undefined): Promise<User | null> {
          if (!credentials) {
            return null;
          }
          
          const { username, password } = credentials;
      
          if (!(username === process.env.admin_user && password === process.env.admin_password)) {
            return null
          } else {
            return {id: "1", username: username};
          }

        }
      })
    ],

    session: {
      strategy: 'jwt'
    },

    pages: {
      signIn: '/admin/sign-in'
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