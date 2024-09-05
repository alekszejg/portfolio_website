"use server"

import { verifyCaptcha } from "@/app/misc/actions/verifyCaptcha";
import { inputSanitizer } from "@/app/misc/utils/inputSanitizer";
import { redirect } from 'next/navigation';


export async function handleAdminAuth(formData: FormData) {
    
    const rawUsername = formData.get("user") as string;
    const rawPassword = formData.get("password") as string;
    const captchaToken = formData.get("captchaToken") as string;

    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
        return "Invalid reCAPTCHA";
    }

    const [user, password] = inputSanitizer([rawUsername, rawPassword]);
    
    if (user === process.env.admin_user && password === process.env.admin_password) {
        redirect("/post-creator/admin");
    } else {
        return "Invalid username or password";
    }
}