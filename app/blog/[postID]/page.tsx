import Blogpost, { BlogpostType, BlogpostProps } from "@/app/blog/blogpost";
import type { PoolClient } from "pg";
import { pool } from "@/postgres";


export async function generateStaticParams() {
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
    const styling = {
        blogpostWrapper: "`w-3/4 py-2 px-4 border-2 border-[hsl(0,0%,75%)] rounded-md box-border`"
    };

    const { postID } = await props.params;
   
    let client: PoolClient | null = null;
    let postData: BlogpostType | {} = {};

    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts WHERE id = $1', [postID]);
        postData = response.rows[0] || {};
    } catch (error: any) {
        console.error('Error executing query', error);
    } finally {
        client && client.release();
    }
    

    if (Object.keys(postData).length > 0) {
        const blogpostProps = {...postData, wrapperStyling: styling.blogpostWrapper} as BlogpostProps
        return <Blogpost {...blogpostProps} />
    }
    
    // Later change this to custom 404 error or something
    else return null;
}