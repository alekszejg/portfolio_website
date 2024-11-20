import NextAuth from "next-auth";
import { authConfig } from '@/app/api/auth/[...nextauth]/auth.config';
import Credentials from "next-auth/providers/credentials";


export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
          credentials: {
            username: {label: "username", type: "text"},
            password: {label: "password", type: "password"},
          },
          
          async authorize(credentials) {
            if (!credentials?.username || !credentials?.password) return null;
            const { username, password } = credentials;
        
            if (!(username === process.env.admin_user && password === process.env.admin_password)) {
                return null
            } else return {id: "1", username: username as string};
          }
        })
    ],
});


