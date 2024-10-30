import PageLayout from '@/app/_layoutComponents/pageLayout';
import SocialProfile from '@/app/_homepage/sections/socialProfile';
import MobileUI from '@/app/_homepage/mobileUI';
import MyStack from '@/app/_homepage/sections/myStack';
import MyProjects from '@/app/_homepage/sections/myProjects';
import RecentPosts from '@/app/_homepage/sections/recentPosts';


export default async function Homepage() {
    const styling = {
        layout: "max-w-[1400px] relative ultrawide:mx-auto",
        mobileUI: {
            wrapper: "block tablet:hidden"
        },
        desktopUI: {
            wrapper: "hidden tablet:block"
        }
    }

    return (
        <PageLayout className={styling.layout}>
            <SocialProfile />
            
            
            <MobileUI 
            wrapperStyling={styling.mobileUI.wrapper}
            MyStack={<MyStack hasHeader={false} />} 
            MyProjects={<MyProjects hasHeader={false} />} 
            RecentPosts={<RecentPosts hasHeader={false} />}/>
            
            <div className={styling.desktopUI.wrapper}>
                <MyStack hasHeader={true} />
                <MyProjects hasHeader={true} />
                <RecentPosts hasHeader={true} />
            </div>

        </PageLayout>
    );
}