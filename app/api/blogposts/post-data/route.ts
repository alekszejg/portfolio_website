import { pool } from "@/postgres";
import type { PoolClient } from "pg";
import { NextRequest, NextResponse } from 'next/server';
import type { PostType } from "../get-recent-posts/route";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const postID = searchParams.get('postID')
    
    let res: PostType | null = null;
    let client: PoolClient | null = null;

    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts WHERE id = $1', [postID]);
        res = response.rows[0];
        return NextResponse.json({postData: res}, { status: 200 });
    } catch (error: any) {
        console.error('Error executing query', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        client && client.release();
    }
}

