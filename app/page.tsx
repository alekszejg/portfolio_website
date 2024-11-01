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
            wrapper: "block tablet:hidden"
        },
        desktopUI: {
            wrapper: "hidden tablet:block",
            recentPosts: {
                section: "py-12 box-border",
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
            RecentPosts={<ShowRecentPosts width={"w-4/5"} />}/>
            
            <div className={styling.desktopUI.wrapper}>
                <MyStack hasHeader={true} />
                <MyProjects hasHeader={true} />
                <section className={styling.desktopUI.recentPosts.section}>
                    <h2 className={styling.desktopUI.recentPosts.header}>Recent posts</h2>
                    <ShowRecentPosts width={"w-4/5"} />
                </section>
            </div>

        </PageLayout>
    );
}