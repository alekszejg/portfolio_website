"use server"

import { pool } from "@/postgres";
import type { PoolClient } from "pg";
import type { PostType } from "./getRecentPosts";


export default async function fetchPostByID(postID: string): Promise<PostType | null> {
    let client: PoolClient | null = null;
    let res: PostType | null = null;

    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts WHERE id = $1', [postID]);
        res = response.rows[0];
        client.release();
    } catch (error: any) {
        console.error("error has occured when fetching recent blogposts");
    }

    return res;
}

