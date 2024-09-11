"use server"
import { PoolClient } from "pg";

export default async function getTotalBlogposts({ client }: {client: PoolClient}) {
    let res: bigint = BigInt(0);
    try {
        const response = await client.query('SELECT COUNT(*) FROM posts;');
        res = BigInt(response.rows[0].count);
    } catch (error: any) {
        console.error('Error executing query', error);
    } 

    return res; 
}