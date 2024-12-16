import PageLayout from '@/app/_layoutComponents/pageLayout';
import PostCreator from "./postCreator";
import RecentMessages from './recentMessages';
import ShowRecentPosts from "../blog/showRecentPosts";
import ChoosePostCategory from "./choosePostCategory";
import DisplayTotalPosts from "./displayTotalPosts";

export default async function AdminPage() {
    const styling = {
        layout: "grid grid-cols-2 gap-x-10 py-12",
        postCreatorForm: "flex flex-col",
        viewPostsWrapper: "flex flex-col gap-y-4"
    };

    return (
        <PageLayout className={styling.layout}>
            <div>
                <PostCreator wrapperStyling={styling.postCreatorForm} selectCategory={ChoosePostCategory()} />
                <RecentMessages />
            </div>

            <ShowRecentPosts 
            wrapperStyling={styling.viewPostsWrapper} 
            includeHeader={true} 
            blogpostWidth="w-[90%]" 
            offset={0} />

        </PageLayout>
    );  
}








