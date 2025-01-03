import urlPaths from "@/app/url.paths";

type CaptchaResponse = { success: boolean; score: number };
type Response = {success: boolean, score?: number}


export default async function verifyCaptcha(recaptchaToken: string): Promise<Response> {
    const url = urlPaths.misc.external.verifyRecaptcha;  

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `secret=${process.env.captcha_secret}&response=${recaptchaToken}`
        });

        if (!res.ok) return {success: false};
        
        const data: CaptchaResponse = await res.json();
        
        if (data.success && data.score > 0.5) {
            console.log("captcha score is: ", data.score);
            return {success: true, score: data.score};
        } else {
            console.log("verification failed");
            return {success: false};
        }

    } catch {
        return {success: false};
    }
}