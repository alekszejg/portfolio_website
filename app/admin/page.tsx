import PageLayout from '@/app/_layoutComponents/pageLayout';
import PostCreator from "./postCreator";
import RecentPosts from "../blog/showRecentPosts";
import "@/Styling/Pages/adminPage.scss";
import ChoosePostCategory from "./choosePostCategory";
import DisplayTotalPosts from "./displayTotalPosts";

export default async function AdminPage() {
    const styling = {
        layout: "flex flex-col gap-x-10 py-12",
        postCreatorWrapper: "flex flex-col w-1/2"
    };

    return (
        <PageLayout className={styling.layout}>
            <PostCreator wrapperStyling={styling.postCreatorWrapper} selectCategory={ChoosePostCategory()} />
            <RecentPosts />
            <div>
                Testing total posta api<br/><br/>
                <DisplayTotalPosts />
            </div>
            
        </PageLayout>
    );  
}








