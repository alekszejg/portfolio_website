import PageLayout from "@/Components/Layout/pageLayout";
import PostCreator from "./postCreator";
import RecentPosts from "./recentPosts";
import "@/Styling/Pages/adminPage.scss";

import { pool } from "@/postgres";
import type { PoolClient } from "pg";
import getPostCategories, { CategoryData } from "@/actions/blog/getPostCategories";
import getTotalBlogposts from "@/actions/blog/getTotalBlogposts";
import getRecentPosts, { PostType} from "@/actions/blog/getRecentPosts";

export default async function AdminPage() {
    
    let client: PoolClient | null = null;
    let postCategories: CategoryData[] = [];
    let totalPosts: bigint = BigInt(0);
    let recentPosts: PostType[] = []; 

    try {
        client = await pool.connect();
        postCategories = await getPostCategories({ client });
        totalPosts = await getTotalBlogposts({ client });
        recentPosts = await getRecentPosts({client: client, offset: 0});
    } catch (error: any) {
        console.error("error: ", error);
    } finally {
        client && client.release();
    }
    

    return (
        <PageLayout layoutID="adminPageLayout">
            <PostCreator postCategories={postCategories} />
            <RecentPosts totalPosts={totalPosts} recentPosts={recentPosts} />
        </PageLayout>
    );  
}








