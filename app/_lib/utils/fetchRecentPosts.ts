import 'server-only'
import { unstable_cache } from 'next/cache';
import { pool } from "@/postgres";
import type { PoolClient } from "pg";
import type { BlogpostType } from '@/app/blog/blogpost';


const fetchRecentPosts = unstable_cache(
    async () => {
        let client: PoolClient | null = null;
        let totalPosts: string = "0";
        let recentPosts: BlogpostType[] = [];
        let errorMessage = ""; 

        try {
            client = await pool.connect();
            
            const totalPostsResponse = await client.query('SELECT COUNT(*) FROM posts');
            totalPosts = totalPostsResponse.rows[0].count;
            
            const postsResponse = await client.query('SELECT * FROM posts ORDER BY created_at DESC LIMIT 5');
            recentPosts = postsResponse.rows;
            recentPosts.length === 0 && (errorMessage = "No recent posts available at the moment.");

        } catch (error: any) {
            console.error('Error executing query', error);
            errorMessage = "Failed to fetch recent blogposts. Please try again later.";
        } finally {
            client && client.release();
        }

        return {total: totalPosts, posts: recentPosts, error: errorMessage};
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
    


