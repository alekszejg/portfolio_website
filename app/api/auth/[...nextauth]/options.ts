import CredentialsProvider from "next-auth/providers/credentials";
import type { User, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";


export const authOptions = {
    providers: [
      CredentialsProvider({
        credentials: {
          username: {label: "username", type: "text"},
          password: {label: "password", type: "password"},
        },
        
        async authorize(credentials:  Record<"username" | "password", string> | undefined): Promise<User | null> {
          if (!credentials) return null;
          const { username, password } = credentials;
      
          if (!(username === process.env.admin_user && password === process.env.admin_password)) return null
          else return {id: "1", username: username};
        }
      })
    ],

    session: {strategy: 'jwt' as const},

    pages: {signIn: '/admin/sign-in'},

    callbacks: {
      async session({ session, token }: { session: Session; token: JWT }) {
        if (token) {
          session.id = token.id;
          session.username = token.username;
        }
        return session;
      },
      async jwt({ token, user }: { token: JWT; user: User }) {
        if (user) {
          token.id = user.id;
          token.username = user.username;
        }
        return token;
      }
    }
};

