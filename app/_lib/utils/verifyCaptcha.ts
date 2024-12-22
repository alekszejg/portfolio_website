import urlPaths from "@/app/url.paths";

export default async function verifyCaptcha(tempCaptchaValue: string): Promise<boolean> {
    const url = urlPaths.misc.external.verifyRecaptcha;  
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `secret=${process.env.captcha_secret}&response=${tempCaptchaValue}`
    });

    const data = await response.json();

    if (data.success) return true;
    else return false;
}