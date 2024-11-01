import PageLayout from '@/app/_layoutComponents/pageLayout';
import SocialProfile from '@/app/_homepage/sections/socialProfile';
import MobileUI from '@/app/_homepage/mobileUI';
import MyStack from '@/app/_homepage/sections/myStack';
import MyProjects from '@/app/_homepage/sections/myProjects';
import ShowRecentPosts from "@/app/blog/showRecentPosts";

export default async function Homepage() {
    const styling = {
        layout: "max-w-[1400px] relative ultrawide:mx-auto",
        mobileUI: {
            wrapper: "block tablet:hidden",
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
            <SocialProfile />
            
            
            <MobileUI 
            wrapperStyling={styling.mobileUI.wrapper}
            MyStack={<MyStack hasHeader={false} />} 
            MyProjects={<MyProjects hasHeader={false} />} 
            RecentPosts={<ShowRecentPosts wrapperStyling={styling.mobileUI.recentPostsWrapper} blogpostWidth={"w-3/4"} />}/>
            
            <div className={styling.desktopUI.wrapper}>
                <MyStack hasHeader={true} />
                <MyProjects hasHeader={true} />
                <section className={styling.desktopUI.recentPosts.section}>
                    <h2 className={styling.desktopUI.recentPosts.header}>Recent posts</h2>
                    <ShowRecentPosts wrapperStyling={styling.desktopUI.recentPosts.wrapper} blogpostWidth={"w-3/4"} />
                </section>
            </div>

        </PageLayout>
    );
}