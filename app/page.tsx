import PageLayout from '@/app/_layoutComponents/pageLayout';
import BasicInfo from '@/app/_homepage/basicInfo/basicInfo';
import ResponsiveUI from '@/app/_homepage/responsiveUI';
import RecentProjects from '@/app/_homepage/recentProjects/recentProjects';
import ShowRecentPosts from "@/app/blog/showRecentPosts";

export default async function Homepage() {
    const styling = {
        layout: "max-w-[1400px] relative ultrawide:mx-auto",
        mainWrapper: "block tablet:hidden",
        mobileUI: {
            recentPostsWrapper: "flex flex-col gap-y-6"
        },
        desktopUI: {
            wrapper: "hidden tablet:block",
            recentPosts: {
                section: "py-12 box-border",
                wrapper: "flex flex-col gap-y-6",
                header: "mb-4"
            }
        }
    }

    return (
        <PageLayout className={styling.layout}>
            <BasicInfo />
            
            <ResponsiveUI 
            RecentProjects={<RecentProjects />} 
            RecentPosts={<ShowRecentPosts wrapperStyling={styling.mobileUI.recentPostsWrapper} blogpostWidth={"w-3/4"} />} 
            />
            
        </PageLayout>
    );
}