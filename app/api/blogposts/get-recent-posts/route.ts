"use server"

import { pool } from "@/postgres";
import { PoolClient } from "pg";
import { NextRequest, NextResponse } from "next/server";

export type PostType = {id: number, title: string, content: string, category_ID: string, created_at: Date}


export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const offset = searchParams.get('offset')

    let res: PostType[] = [];
    let client: PoolClient | null = null;

    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts ORDER BY created_at DESC LIMIT 10 OFFSET $1', [offset]);
        res = response.rows;
        return NextResponse.json({recent_posts: res}, {status: 200});
    } catch (error: any) {
        console.error('Error executing query', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        client && client.release();
    }
}


