import PageLayout from '@/app/_layoutComponents/pageLayout';
import BasicInfo from '@/app/_homepage/basicInfo/basicInfo';
import ResponsiveUI from '@/app/_homepage/responsiveUI';
import ProjectsSection from '@/app/projects/projectsSection';
import RecentPosts from "@/app/_blog/recentPosts";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Welcome! - Alexey Guljajev",
    description: `Greetings people! I am A self-taught programmer with BSc Economics Diploma 
    who has been programming for a year in both Python and JavaScript...`
};


export default async function Homepage() {
    const styling = {
        layout: "max-w-[1400px] relative ultrawide:mx-auto",
        sections: {
            recentProjects: "px-homepageXPad py-homepageYPad",
            recentPosts: "px-homepageXPad py-homepageYPad"
        }
    }

    return (
        <PageLayout className={styling.layout}>
            <BasicInfo />
            
            <ResponsiveUI 
            ProjectsSection={<ProjectsSection display="recent" wrapperStyling={styling.sections.recentProjects} includeHeader={true} />} 
            ShowRecentPosts={<RecentPosts wrapperStyling={styling.sections.recentPosts} includeHeader={true} blogpostWidth="w-3/4" showTotalCount={false} />} 
            />
            
        </PageLayout>
    );
}