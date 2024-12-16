import PageLayout from '@/app/_layoutComponents/pageLayout';
import BasicInfo from '@/app/_homepage/basicInfo/basicInfo';
import ResponsiveUI from '@/app/_homepage/responsiveUI';
import ProjectsSection from '@/app/projects/projectsSection';
import RecentPosts from "@/app/blog/recentPosts";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Welcome! - Alexey Guljajev",
    description: `Greetings people! I am A self-taught programmer with BSc Economics Diploma 
    who has been programming for a year in both Python and JavaScript...`
};


export default async function Homepage() {
    const styling = {
        layout: "max-w-[1400px] relative ultrawide:mx-auto",
        recentProjectsSection: "py-12 px-[5%]",
        recentPostsSection: "py-12 px-[5%]",
    }

    return (
        <PageLayout className={styling.layout}>
            <BasicInfo />
            
            <ResponsiveUI 
            ProjectsSection={<ProjectsSection display="recent" wrapperStyling={styling.recentProjectsSection} includeHeader={true} />} 
            ShowRecentPosts={<RecentPosts wrapperStyling={styling.recentPostsSection} includeHeader={true} blogpostWidth="w-3/4" />} 
            />
            
        </PageLayout>
    );
}