"use server"

import { pool } from "@/postgres";

export type CategoryData = {id: number, category: string};

export default async function getPostCategories(): Promise<CategoryData[] | null> {
    let results = null
    try {
      const client = await pool.connect();
      const response = await client.query('SELECT * FROM posts_category');
      results = response.rows;
      client.release()
    } 
    catch (error: any) {
        console.error('Error executing query', error);
    } 
    
    return results; 
}
