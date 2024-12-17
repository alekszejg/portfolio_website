import type { User, Session, NextAuthConfig } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { NextResponse } from "next/server";
import urlPaths from "@/app/url.paths";


export const authConfig = {
    providers: [], // leave out for now to satisfy NextAuthConfig
    basePath: urlPaths.misc.authBasePath,
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt' as const,
        maxAge: 60 * 60 * 24 * 30, // expires in 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    pages: {signIn: urlPaths.adminSignIn},
  
    callbacks: {
        async authorized({ auth, request }) {
            const PROTECTED_PATHS = ["/admin"];
            const isLoggedIn = auth?.user;
            if (PROTECTED_PATHS.includes(request.nextUrl.pathname)) {
                if (isLoggedIn) return true;
                else return NextResponse.redirect(new URL(
                    `${urlPaths.misc.authBasePath}/signin?callbackUrl=${encodeURIComponent(request.nextUrl.pathname)}`, request.url)
                );
            }
            return true;
        },

        async jwt({ token, user }: { token: JWT; user: User }) {
          if (user) {
            token.id = user.id as string;
            token.username = user.username;
          }
          return token;
        },

        async session({ session, token }: {session: Session, token: JWT}) {
            if (token) {
                session.id = token.sub as string;
                session.username = token.username || null;
            }
            return session;
        }
    },
} satisfies NextAuthConfig;