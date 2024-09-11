"use client"

import { useEffect, useRef, FormEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import verifyCaptcha from '@/actions/authentification/verifyCaptcha';
import sanitizeInput from '@/actions/sanitizeInput';
import "@/Styling/Pages/adminAuth.scss";


export default function AdminSignInPage() {
    let error = "";

    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; 
        if(status === "authenticated") router.push('/admin');
        console.log("status is ", status)
    }, [status, router]);


    
    const [errors, setErrors] = useState({username: "", password: "", captcha: ""});
    const captchaRef = useRef<any>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const rawUsername = formData.get('username') as string;
        const rawPassword = formData.get('password') as string;

        const tempCaptchaValue = captchaRef.current.getValue(); 

        if (!tempCaptchaValue) {
            setErrors({...errors, captcha: "Failed to obtain Captcha"});
            return;
        }
    
        const response = await verifyCaptcha(tempCaptchaValue);
        if (!response.verified) {
            setErrors({...errors, captcha: response.error}); 
            return;
        }

        const [cleanUsername, cleanPassword] = await sanitizeInput([rawUsername, rawPassword]);
        !cleanUsername && setErrors({...errors, username: "Illegal characters in username"});
        !cleanPassword && setErrors({...errors, password: "Illegal characters in password"});
        if (!cleanUsername || !cleanPassword) return;

        
        const result = await signIn('credentials', {
            redirect: false,
            username: cleanUsername,
            password: cleanPassword,
        });

        // handle errors later
        if (result && result.error) {
            error = result.error;
            captchaRef.current.reset();
        } else if (result && result.ok) {
            router.push('/admin');
        } else {
            error = "Unexpected error occurred."
        }
        
    };

    return (
        <form id="authFormWrapper" onSubmit={handleSubmit}>
            {error && <p id="errorText">{error}</p>}
        
            <input id="username" type="text" placeholder="Username" name="username" /> 
            <input id="password" type="password" placeholder="Password" name="password" /> 
            <ReCAPTCHA ref={captchaRef} sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!} />
            <button id="submitButton" type="submit">Submit</button>
        </form>
    );
}

