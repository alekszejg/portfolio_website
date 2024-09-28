import PageLayout from '@/app/_layoutComponents/pageLayout';
import SocialProfile from '@/app/_homepage/socialProfile';
import MobileViewMenu from '@/app/_homepage/mobileViewMenu';
import MyStack from '@/app/_homepage/myStack';
import MyProjects from '@/app/_homepage/myProjects';
import RecentPosts from '@/app/_homepage/recentPosts';
import "@/Styling/Pages/homepage.scss";


export default async function Homepage() {
    return (
        <PageLayout layoutID="homepageLayout">
            <SocialProfile />
            <MobileViewMenu MyStack={<MyStack hasHeader={false} />} MyProjects={<MyProjects hasHeader={false} />} RecentPosts={<RecentPosts hasHeader={false} />}/>
            
            <div id="desktopSectionWrapper">
                <MyStack hasHeader={true} />
                <MyProjects hasHeader={true} />
                <RecentPosts hasHeader={true} />
            </div>
        </PageLayout>
    );
}