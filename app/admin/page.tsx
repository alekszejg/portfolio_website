import PageLayout from '@/app/_layoutComponents/pageLayout';
import PostCreator from "./postCreator";
import ShowRecentPosts from "../blog/showRecentPosts";
import ChoosePostCategory from "./choosePostCategory";
import DisplayTotalPosts from "./displayTotalPosts";

export default async function AdminPage() {
    const styling = {
        layout: "flex gap-x-10 py-12",
        postCreatorWrapper: "flex flex-col w-1/2",
        recentPosts: {
            section: "w-1/2",
            wrapper: "flex flex-col gap-y-4",
            header: "mb-6"
        }
    };

    return (
        <PageLayout className={styling.layout}>
            <PostCreator wrapperStyling={styling.postCreatorWrapper} selectCategory={ChoosePostCategory()} />
            <section className={styling.recentPosts.section}>
                <h2 className={styling.recentPosts.header}>Recent posts {<DisplayTotalPosts />}</h2>
                <ShowRecentPosts wrapperStyling={styling.recentPosts.wrapper} blogpostWidth="w-[90%]" />
            </section>
        </PageLayout>
    );  
}








