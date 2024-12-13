import { pool } from "@/postgres";
import type { PoolClient } from "pg";
import Blogpost, { BlogpostType } from "@/app/blog/blogpost";


type ShowRecentPostsProps = {
    wrapperStyling: string, 
    includeHeader: boolean,
    blogpostWidth: string,
    offset: number | string, 
}


export default async function ShowRecentPosts(props: ShowRecentPostsProps) {
    const { wrapperStyling, includeHeader, blogpostWidth, offset } = props;

    const styling = {
        section: wrapperStyling,
        header: "mb-4 font-medium text-xl",
        list: "flex flex-col gap-y-6",
        listItem: `${blogpostWidth} py-2 px-4 border-2 border-[hsl(0,0%,75%)] rounded-md box-border`
    }

    let posts: BlogpostType[] = [];
    let client: PoolClient | null = null;

    try {
        client = await pool.connect();
        const response = await client.query('SELECT * FROM posts ORDER BY created_at DESC LIMIT 10 OFFSET $1', [offset]);
        posts = response.rows;
        return posts;
    } catch (error: any) {
        console.error('Error executing query', error);
    } finally {
        client && client.release();
    }

    if (posts.length > 0) {
        return (
            <section className={styling.section}>
                {includeHeader && <h2 className={styling.header}>RECENT POSTS</h2>}
                
                <ul className={styling.list}>
                    {posts.map(post => (
                        <Blogpost key={post.id} wrapperStyling={styling.listItem} {...post} />
                    ))}
                </ul>
    
            </section>
        );
    } else return null;
}