"use server"
import { revalidateTag } from 'next/cache'
import { auth } from "@/auth";
import type { PoolClient } from "pg";
import { pool } from "@/postgres";
import handleRawInput from "@/app/_lib/utils/handleRawInput";


export default async function handlePostSubmit(formData: unknown) {
    
    // only to be sued by authorized users (me)
    const session = await auth();
    if (!session) {
        console.error("handlePostSubmit action was triggered by unauthorized user")
        throw new Error("Authorization Error")
    }
     
    // check if argument is malicous (if it isnt FormData)
    if (!(formData instanceof FormData)) {
        console.error("Invalid argument passed to handleMessageSubmit");
        throw new Error("Invalid input: Expected FormData object as argument");
    }

    const res = {titleError: "", descrError: "", submitted: false};

    const rawTitle = formData.get('title') as string;
    const rawText = formData.get('body') as string;
    let category = formData.get('category') as string || "3";
    

    if (rawTitle.length > 25) {
        res.titleError="Title must be below 25 characters";
        return res;
    }
    
    const sanitizedInput = handleRawInput([rawTitle, rawText], "recursiveEscape");
    let client: PoolClient | null = null;
    
    try {
        client = await pool.connect();
        const query = 'INSERT INTO posts (title, content, category_id) VALUES ($1, $2, $3)';
        await client.query(query, [sanitizedInput[0], sanitizedInput[1], category]);
        res.submitted = true;
        client.release();
    } catch (error: any) {
        console.error("Error during post submission to posts has occured", error);
        client && client.release();
    }
    revalidateTag('recentPosts');
    return res;
}