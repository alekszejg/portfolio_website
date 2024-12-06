"use client"
import { SessionProvider } from 'next-auth/react';
import SignInForm from '@/app/admin/sign-in/signInForm';


export default function SignInPage() {
    
    return (
        <SessionProvider>
            <SignInForm />
        </SessionProvider>
    );
}

