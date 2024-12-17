"use server"
import type { PoolClient } from "pg";
import { pool } from "@/postgres";
import handleRawInput from "@/app/_lib/utils/handleRawInput";
import { revalidateTag } from "next/cache";


export default async function handleMessageSubmit(formData: unknown) {
    
    // check if argument is malicous (if it isnt FormData)
    if (!(formData instanceof FormData)) {
        console.error("Invalid argument passed to handleMessageSubmit");
        throw new Error("Invalid input: Expected FormData object as argument");
    }

    const res = {nameError: "", emailError: "", messageError: "", submitted: false};

    const rawName = formData.get('name') as string;
    const rawEmail = formData.get('contactEmail') as string;
    const rawMessage = formData.get('message') as string;

    if (rawName.length > 100) {
        res.nameError = "Name should be below 100 characters";
    }

    if (rawEmail.length > 100) {
        res.emailError = "Email should be below 100 characters"
    }

    if (rawMessage.length <= 9) {
        res.messageError = "Message hould be at least 10 characters"
    }

    // Don't sanitize if length checks failed
    if (res.nameError || res.emailError || res.messageError) {
        return res;
    }

    // Continue to sanitize and escape raw input
    const sanitizedInput = handleRawInput([rawName, rawEmail, rawMessage], "recursiveEscape");
    let client: PoolClient | null = null;
    
    try {
        client = await pool.connect();
        const query = 'INSERT INTO user_messages (name, email, message) VALUES ($1, $2, $3)';
        await client.query(query, [sanitizedInput[0], sanitizedInput[1], sanitizedInput[2]]);
        res.submitted = true;
        revalidateTag('recentMessages');
        client.release();
    } catch (error: any) {
        console.error("Error during message submission to user_messages has occured", error);
        client && client.release();
    }
    return res;
}
