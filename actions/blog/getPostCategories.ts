"use server"
import { PoolClient } from "pg";

export type CategoryData = {id: number, category: string};


export default async function getPostCategories({client}: {client: PoolClient}): Promise<CategoryData[]> {
    let results: CategoryData[] = []; 
    try {
      const response = await client.query('SELECT * FROM posts_category');
      results = response.rows;
    } catch (error: any) {
        console.error('Error executing query', error);
    } 
    
    return results; 
}
