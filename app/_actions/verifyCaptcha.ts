"use server"

export default async function verifyCaptcha(tempCaptchaValue: string) {
    let res = {verified: false, error: ""};
    
    const secret = process.env.captcha_secret;
    const url = "https://www.google.com/recaptcha/api/siteverify?";  
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `secret=${secret}&response=${tempCaptchaValue}`
    });
    
    const data = await response.json();
    data.success ? (res.verified = true) : (res.error = "Failed to verify Captcha");
    return res;
}