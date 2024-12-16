import 'server-only'
import { unstable_cache } from 'next/cache';
import { pool } from "@/postgres";
import type { PoolClient } from "pg";
import type { BlogpostType } from '@/app/blog/blogpost';


const fetchRecentPosts = unstable_cache(
    async () => {
        let client: PoolClient | null = null;
        let posts: BlogpostType[] = [];
        let errorMessage = ""; 

        try {
            client = await pool.connect();
            const response = await client.query('SELECT * FROM posts ORDER BY created_at DESC LIMIT 10');
            posts = response.rows;
            posts.length === 0 && (errorMessage = "No recent posts available at the moment.");
        } catch (error: any) {
            console.error('Error executing query', error);
            errorMessage = "Failed to fetch recent blogposts. Please try again later.";
        } finally {
            client && client.release();
        }

        return {posts: posts, error: errorMessage};
    },
    // cache key
    ["recentPosts"],
    {
        tags: ['recentPosts'],
        // revalidate cache every 15 min
        revalidate: 900,
    }
);

export default fetchRecentPosts;
    


