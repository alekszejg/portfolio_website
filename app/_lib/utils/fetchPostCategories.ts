import 'server-only'
import { unstable_cache } from 'next/cache';
import { pool } from "@/postgres";
import type { PoolClient } from "pg";
import type { CategoryData } from "@/app/_blog/blogpost";


// Cached version for clients
export const fetchPostCategoriesCached = unstable_cache(
    async () => {
        return await fetchPostCategories();
    },
    ["postCategories"],
    {
        tags: ['recentPosts'],
        revalidate: false, // no revalidation until another blogpost is added
    }
); 


// Non-cached version for me when entering /admin page
export async function fetchPostCategories() {
    let client: PoolClient | null = null;
    let categories: CategoryData[] | [] = [];

    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts_category');
        categories = response.rows;
    } catch (error: any) {
        console.error('Error executing query', error);
    } finally {
        client && client.release();
    }

    return {categories: categories};
}