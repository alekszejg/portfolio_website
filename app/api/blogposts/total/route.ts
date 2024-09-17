import { PoolClient } from "pg";
import { pool } from "@/postgres";
import { NextResponse } from 'next/server';

export async function GET() {
    let res: bigint = BigInt(0);
    let client: PoolClient | null = null;

    try {
        client = await pool.connect();
        const response = await client.query('SELECT COUNT(*) FROM posts;');
        res = BigInt(response.rows[0].count);
        return NextResponse.json({ totalPosts: res.toString() }, { status: 200 });
    } catch (error: any) {
        console.error('Error executing query', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        client && client.release();
    }
}
