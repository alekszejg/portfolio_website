"use client"
import { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


export default function GoogleCaptchaWrapper({ children }: {children: React.ReactNode}) {
    const reCaptchaKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

    useEffect(() => {
        const interval = setInterval(() => {
            const badge = document.querySelector(".grecaptcha-badge");
            if (badge instanceof HTMLElement) {
                badge.style.setProperty('visibility', 'hidden', 'important');
                clearInterval(interval);
            } 
        }, 100);
        return () => clearInterval(interval);
    }, [])

    return (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey!}>
            {children}
        </GoogleReCaptchaProvider>
    );
}