import { PoolClient } from "pg";
import { pool } from "@/postgres";
import { NextResponse } from 'next/server';


export type CategoryData = {id: number, category: string};


export async function GET() {
    let res: {id: string}[] = [];
    let client: PoolClient | null = null;

    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts_category');
        res = response.rows;
        return NextResponse.json({post_ids: res}, {status: 200});
    } catch (error: any) {
        console.error('Error executing query', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        client && client.release();
    }
}

