"use client"
import { useEffect, useRef, FormEvent, useState } from 'react';
import ReCAPTCHA, { ReCAPTCHAInstance } from 'react-google-recaptcha';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import handleAdminSignin from '@/app/_lib/actions/handleAdminSignin';
import urlPaths from '@/app/url.paths';


export default function SignInForm() {
    const styling = {
        form: "flex flex-col items-center gap-y-6 w-1/2 py-16 px-8 mt-[20vh] mx-auto border-2 border-[lightblue] rounded-xl",
        error: "text-red",
        inputField: "w-[300px] h-8 py-[1.2rem] px-[0.7rem] box-border border-2 border-formInput rounded-md focus:outline-none focus:border-formInputFocused",
        submitButton: "flex justify-center items-center w-[150px] py-3 mt-[0.1rem] border-2 border-formInput rounded-lg font-medium tracking-wide hover:scale-[1.01]"
    }

    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; 
        if(status === "authenticated") router.push('/admin');
    }, [status, router]);


    const [errors, setErrors] = useState({inputs: "", auth: ""});
    const captchaRef = useRef<ReCAPTCHAInstance | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const tempCaptchaValue = captchaRef.current?.getValue();
        const { inputsError, captchaError } = await handleAdminSignin(formData, tempCaptchaValue);
        
        if (inputsError) {
            setErrors({...errors, inputs: inputsError});
            return;
        }

        if (captchaError) {
            setErrors({...errors, inputs: captchaError});
            captchaRef.current?.reset();
            return;
        }

    
        const response = await signIn('credentials', {
            redirect: false,
            username: formData.get('username') as string,
            password: formData.get('password') as string,
        });
    
        if (response && response.error) {
            setErrors({...errors, auth: "Invalid credentials. Try again"});
            captchaRef.current?.reset();
            return;
        } 

        router.push(urlPaths.admin);  
    };


    return (
        <form className={styling.form} onSubmit={handleSubmit}>
            <input className={styling.inputField} type="text" placeholder="Username" name="username" /> 
            <input className={styling.inputField} type="password" placeholder="Password" name="password" /> 
            <ReCAPTCHA ref={captchaRef} sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!} />
            <button className={styling.submitButton} type="submit">Submit</button>
            
            {errors.inputs && <p className={styling.error}>{errors.inputs}</p>}
            {errors.auth && <p className={styling.error}>{errors.auth}</p>}
        </form>
    );
}