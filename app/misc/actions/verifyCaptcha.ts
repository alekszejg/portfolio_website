"use server"

export async function verifyCaptcha(captchaToken: string):Promise<boolean> {
    const secret = process.env.captcha_secret;
    const url = "https://www.google.com/recaptcha/api/siteverify?";
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `secret=${secret}&response=${captchaToken}`
    });

    const data = await response.json();
    return data.success;
}