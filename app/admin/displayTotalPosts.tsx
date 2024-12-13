import { PoolClient } from "pg";
import { pool } from "@/postgres";


export default async function DisplayTotalPosts() {
    let totalPosts: bigint = BigInt(0);
    let client: PoolClient | null = null;

    try {
        client = await pool.connect();
        const response = await client.query('SELECT COUNT(*) FROM posts;');
        totalPosts = BigInt(response.rows[0].count);
        return totalPosts.toString();
    } catch (error: any) {
        console.error('Error executing query', error);
    } finally {
        client && client.release();
    }
    
    return <span>(total: {totalPosts})</span>;
}