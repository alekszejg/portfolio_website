"use server"
import sanitizeInput from "@/app/_actions/sanitizeInput";
import { pool } from "@/postgres";


export default async function handleMessageSubmit(formData: FormData) {
    const res = {nameError: "", emailError: "", messageError: "", submitted: false};

    const rawName = formData.get('name') as string;
    const rawEmail = formData.get('contactEmail') as string;
    const rawMessage = formData.get('message') as string;

    if (rawName.length > 100) {
        res.nameError = "Name should be below 100 characters";
    }

    if (rawEmail && rawEmail.length > 100) {
        res.emailError = "Email should be below 100 characters"
    }

    const sanitizedInput = await sanitizeInput([rawName, rawEmail, rawMessage]);
    !sanitizedInput[0] && (res.nameError = "Name contains illegal characters");
    rawEmail && !sanitizedInput[1] && (res.emailError = "Email contains illegal characters");
    !sanitizedInput[2] && (res.messageError) && (res.messageError = "Message contains illagal characters");

    if (sanitizedInput[0] && (rawEmail && sanitizedInput[1] || !rawEmail) && sanitizedInput[2]) {
        let optionalEmail = sanitizedInput[1] ?? null; 
        try {
            const client = await pool.connect();
            await client.query('INSERT INTO user_messages (name, email, message) VALUES ($1, $2, $3)', [sanitizedInput[0], optionalEmail, sanitizedInput[2]]);
            res.submitted = true;
            client.release();
        } catch (error: any) {
            console.error("Some error has occured during submission: ", error);
        }
    }
    return res;
}
