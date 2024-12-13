import { PoolClient } from "pg";
import { pool } from "@/postgres";
import type { CategoryData } from "@/app/blog/blogpost";


export default async function ChoosePostCategory() {
    const styling = {
        select: "relative bottom-[3px] border-hsl(0,0%,65%) focus:border-hsl(0,0%,65%) focus:outline-none" 
    };

    let client: PoolClient | null = null;
    let categories: CategoryData[] | null = [];
    
    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts_category');
        categories = response.rows;
    } catch (error: any) {
        console.error('Error executing query', error);
    } finally {
        client && client.release();
    }

    if (categories.length > 0) {
        return (
            <select className={styling.select} name="category"><option value={undefined} />
                {categories.map((category: CategoryData) => (
                    <option key={category.id} value={category.id}>{category.category}</option>
                ))}
            </select>
        );
    } else return null;
}

