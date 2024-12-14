"use client"
import { useEffect, useRef, FormEvent, useState } from 'react';
import ReCAPTCHA, { ReCAPTCHAInstance } from 'react-google-recaptcha';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import verifyCaptcha from '@/app/_actions/verifyCaptcha';
import sanitizeInput from '@/app/_actions/sanitizeInput';


export default function SignInForm() {
    const styling = {
        form: "flex flex-col items-center gap-y-6 w-1/2 py-16 px-8 mt-[20vh] mx-auto border-2 border-[lightblue] rounded-xl",
        error: "text-red",
        inputField: "w-[300px] h-8 py-[1.2rem] px-[0.7rem] box-border border-2 border-formInput rounded-md focus:outline-none focus:border-formInputFocused",
        submitButton: "flex justify-center items-center w-[150px] py-3 mt-[0.1rem] border-2 border-formInput rounded-lg font-medium tracking-wide hover:scale-[1.01]"
    }

    let error = "";

    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; 
        if(status === "authenticated") router.push('/admin');
    }, [status, router]);


    
    const [errors, setErrors] = useState({username: "", password: "", captcha: ""});
    const captchaRef = useRef<ReCAPTCHAInstance | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const rawUsername = formData.get('username') as string;
        const rawPassword = formData.get('password') as string;

        const tempCaptchaValue = captchaRef.current?.getValue(); 

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
            captchaRef.current?.reset();
        } else if (result && result.ok) {
            router.push('/admin');
        } else {
            error = "Unexpected error occurred."
        }
        
    };


    return (
        <form className={styling.form} onSubmit={handleSubmit}>
            {error && <p className={styling.error}>{error}</p>}
        
            <input className={styling.inputField} type="text" placeholder="Username" name="username" /> 
            <input className={styling.inputField} type="password" placeholder="Password" name="password" /> 
            <ReCAPTCHA ref={captchaRef} sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!} />
            <button className={styling.submitButton} type="submit">Submit</button>
        </form>
    );
}