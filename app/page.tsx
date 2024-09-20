import Link from 'next/link';
import PageLayout from '@/Components/Layout/pageLayout';
import SocialProfile from './_homepage/socialProfile';
import MyStack from '@/app/_homepage/myStack';
import RecentPosts from './_homepage/recentPosts';
import "@/Styling/Pages/homepage.scss";


export default async function Homepage() {
    return (
        <PageLayout layoutID="homepageLayout">
            <SocialProfile />

            <div id="buttonWrapper">
                <Link href="/contact"><button>Contact</button></Link>
                <Link href="/projects"><button>View Projects</button></Link>
            </div>

            <MyStack />
            <RecentPosts />

        </PageLayout>
    )
}