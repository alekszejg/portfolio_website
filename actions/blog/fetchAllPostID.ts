"use server"

import { pool } from "@/postgres";
import type { PoolClient } from "pg";


export default async function fetchAllPostID() {
    let client: PoolClient | null = null;
    let res: {id: string}[] = [];

    try {
        client = await pool.connect();
        const response = await client.query('SELECT id FROM posts');
        res = response.rows;
        client.release();
    } catch (error: any) {
        console.error("error has occured when fetching recent blogposts: ", error);
    }

    return res;
}

