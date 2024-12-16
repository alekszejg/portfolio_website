import 'server-only'
import { unstable_cache } from 'next/cache';
import { pool } from "@/postgres";
import type { PoolClient } from "pg";
import type { UserMessage } from '@/app/admin/userMessage';


const fetchRecentMessages = unstable_cache(
    async () => {
        let client: PoolClient | null = null;
        let messages: UserMessage[] | [] = [];
        let errorMessage = ""; 

        try {
            client = await pool.connect();
            const response = await client.query('SELECT * FROM user_messages ORDER BY created_at DESC');
            messages = response.rows;
            messages.length === 0 && (errorMessage = "No recent messages available at the moment.");
        } catch (error: any) {
            console.error('Error executing query', error);
            errorMessage = "Failed to fetch recent messages. Please try again later.";
        } finally {
            client && client.release();
        }

        return {messages: messages, error: errorMessage};
    },
    // cache key
    ["recentMessages"],
    {
        tags: ['recentMessages'],
        // revalidate cache every 3 hours
        revalidate: 10800,
    }
);

export default fetchRecentMessages;