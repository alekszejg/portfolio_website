"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { pool } from "@/postgres";
import sanitizeInput from "@/actions/sanitizeInput";

export default async function handlePostSubmit(formData: FormData) {
    
    const session = await getServerSession(authOptions);
    if (!session || session.username !== process.env.admin_user) {
        throw new Error("Unauthorized access");
    } else {
        const res = {titleError: "", descrError: "", submitted: false};

        const rawTitle = formData.get('title') as string;
        const rawText = formData.get('body') as string;
        let category = formData.get('category') as string;
        !category && (category = "3"); // current key for misc, possibly change later

    
        if (rawTitle.length > 25) {
            res.titleError="Title must be below 25 characters";
            return res;
        }
        
        const sanitizedInput = await sanitizeInput([rawTitle, rawText]);
        
        !sanitizedInput[0] && (res.titleError = "Title contains illegal characters");
        !sanitizedInput[1] && (res.descrError = "Description contains illegal characters");

        if (sanitizedInput[0] && sanitizedInput[1]) {
            try {
                const client = await pool.connect();
                await client.query('INSERT INTO posts (title, content, category_id) VALUES ($1, $2, $3)', [sanitizedInput[0], sanitizedInput[1], category]);
                res.submitted = true;
                client.release();
            } catch (error: any) {
                console.error("Some error has occured during submission: ", error);
            }
        }
        return res;
    }
}