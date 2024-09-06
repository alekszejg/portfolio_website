"use client"

import { useEffect, useRef, FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import "@/Styling/Pages/adminAuth.scss";


export default function AdminSignInPage() {
    let tempCaptcha = "";
    let error = "";

    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; 
        if(status === "authenticated") router.push('/post-creator/admin');
    }, [status, router ]);

    const recaptchaRef = useRef<any>(null);
    const receivedCaptcha = (tempValue: string | null) => {tempValue && (tempCaptcha = tempValue)};

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        tempCaptcha && formData.append('tempCaptcha', tempCaptcha);
        
        const result = await signIn('credentials', {
            redirect: false,
            username: formData.get('username'),
            password: formData.get('password'),
            tempCaptcha: formData.get('tempCaptcha')
        });

        // handle errors later
        if (result?.error) {
            error = result.error;
            recaptchaRef.current.reset();
        } else if (result?.ok) {
            router.push('/post-creator/admin');
        } else {
            error = "Unexpected error occurred."
        }
        console.log("result is ", result);
    };

    return (
        <form id="authFormWrapper" onSubmit={handleSubmit}>
            {error && <p id="errorText">{error}</p>}
        
            <input id="username" type="text" placeholder="Username" name="username" /> 
            <input id="password" type="password" placeholder="Password" name="password" /> 
            <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!} onChange={receivedCaptcha} />
            <button id="submitButton" type="submit">Submit</button>
        </form>
    );
}

