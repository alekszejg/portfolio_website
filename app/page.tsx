import PageLayout from '@/app/_layoutComponents/pageLayout';
import SocialProfile from '@/app/_homepage/socialProfile';
import MobileUI from '@/app/_homepage/mobileUI';
import MyStack from '@/app/_homepage/myStack';
import MyProjects from '@/app/_homepage/myProjects';
import RecentPosts from '@/app/_homepage/recentPosts';


export default async function Homepage() {
    const styling = {
        layout: "max-w-[1400px] relative",
        mobileUI: {
            wrapper: "block"
        },
        desktopUI: {
            wrapper: "hidden"
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