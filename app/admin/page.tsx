import PageLayout from '@/app/_layoutComponents/pageLayout';
import { fetchPostCategories } from '@/app/_utils/fetchPostCategories';
import type { CategoryData } from '@/app/blog/blogpost';
import PostCreator from "./postCreator";
import RecentMessages from './recentMessages';
import RecentPosts from "../blog/recentPosts";



export default async function AdminPage() {
    const styling = {
        layout: "grid grid-cols-2 gap-x-10 py-12",
        postCreatorForm: "flex flex-col pl-adminPageLSide",
        recentMessagesWrapper: "flex flex-col pl-adminPageLSide",
        viewPostsWrapper: "flex flex-col gap-y-4"
    };

    const postCategoriesRes = await fetchPostCategories();
    const postCategories = postCategoriesRes.categories;

    return (
        <PageLayout className={styling.layout}>
            <div>
                <PostCreator wrapperStyling={styling.postCreatorForm} postCategories={postCategories} />
                <RecentMessages wrapperStyling={styling.recentMessagesWrapper} />
            </div>

            <RecentPosts 
            wrapperStyling={styling.viewPostsWrapper} 
            includeHeader={true} 
            blogpostWidth="w-[90%]" />

        </PageLayout>
    );  
}








