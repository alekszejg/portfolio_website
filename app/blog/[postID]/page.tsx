import Blogpost from "@/app/blog/blogpost";
import type { PoolClient } from "pg";
import { pool } from "@/postgres";


export async function generateStaticParams() {
    /*const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts/get-all-post-ids`);
    
    if (response.ok) {
        const data = await response.json();
        return data.post_ids;
    } else {
        console.error("Failed to fetch total posts", response.statusText);
        return [];
    }*/

    let client: PoolClient | null = null;

    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts_category');
        return response.rows;
    } 
    
    catch {
        return [];
    } 
    
    finally {
        client && client.release();
    }
}


export default async function BlogpostPage(props: {params: Promise<{postID: string}>}) {
    const params = await props.params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts/post-data?postID=${params.postID}`);

    if (response.ok) {
        const data = await response.json();
        return <Blogpost {...data.postData} />
    } else return null;
}