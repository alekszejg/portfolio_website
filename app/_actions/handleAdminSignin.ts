"use server"
import handleRawInput from "@/app/_utils/handleRawInput";
import urlPaths from "@/app/url.paths";

export default async function handleAdminSignin(formData: unknown, tempCaptchaValue: unknown) {
    
    // check if 1st argument is malicous (if it isnt FormData)
    if (!(formData instanceof FormData)) {
        console.error("Invalid argument passed to handleMessageSubmit");
        throw new Error("Invalid input: Expected FormData object as argument");
    }

    // check if 2nd argument is malicous (if it isnt a string)
    if (typeof tempCaptchaValue !== "string") {
        console.error("Invalid captcha value");
        throw new Error("Invalid input: Expected a string for captcha value");
    }

    let res = {inputsError: "", captchaError: ""};

    const rawUsername = formData.get('username') as string;
    const rawPassword = formData.get('password') as string;
    
    const [cleanUsername, cleanPassword] = handleRawInput([rawUsername, rawPassword], "discard");
    if (!cleanUsername || !cleanPassword) {
        res.inputsError = "Username or password contain invalid characters"
        return res;
    }
    
    const sanitizedTempCaptcha = handleRawInput([tempCaptchaValue], "discard");
    if (!sanitizedTempCaptcha) {
        res.captchaError = "Failed to verify Captcha";
        return res;
    }

    const url = urlPaths.misc.external.verifyRecaptcha;  
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `secret=${process.env.captcha_secret}&response=${tempCaptchaValue}`
    });

    const data = await response.json();
    !data.success && (res.captchaError = "Failed to verify Captcha");
    
    return res;
}