import PageLayout from "@/Components/Layout/pageLayout";
import PostCreator from "./postCreator";
import RecentPosts from "./recentPosts";
import "@/Styling/Pages/adminPage.scss";
import ChoosePostCategory from "./choosePostCategory";
import DisplayTotalPosts from "./displayTotalPosts";

export default async function AdminPage() {

    return (
        <PageLayout layoutID="adminPageLayout">
            <PostCreator selectCategory={ChoosePostCategory()} />
            <RecentPosts />
            <div>
                Testing total posta api<br/><br/>
                <DisplayTotalPosts />
            </div>
            
        </PageLayout>
    );  
}








