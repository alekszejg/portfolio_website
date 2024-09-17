import PageLayout from "@/Components/Layout/pageLayout";
import PostCreator from "./postCreator";
import RecentPosts from "./recentPosts";
import "@/Styling/Pages/adminPage.scss";
import { PoolClient } from "pg";
import { pool } from "@/postgres";
import getRecentPosts, { PostType} from "@/actions/blog/getRecentPosts";

import ChoosePostCategory from "./choosePostCategory";

import DisplayTotalPosts from "./displayTotalPosts";

export default async function AdminPage() {
    let client: PoolClient | null = null;
    let recentPosts: PostType[] = []; 

    
    try {
        client = await pool.connect();
        recentPosts = await getRecentPosts({client: client, offset: 0});
    } catch (error: any) {
        console.error("error: ", error);
    } finally {
        client && client.release();
    }
    

    return (
        <PageLayout layoutID="adminPageLayout">
            <PostCreator selectCategory={ChoosePostCategory()} />
            <RecentPosts poolClient={client} recentPosts={recentPosts} />
            <div>
                Testing total posta api<br/><br/>
                <DisplayTotalPosts />
            </div>
            
        </PageLayout>
    );  
}








