import PageLayout from '@/app/_layoutComponents/pageLayout';
import BasicInfo from '@/app/_homepage/basicInfo/basicInfo';
import ResponsiveUI from '@/app/_homepage/responsiveUI';
import ProjectsSection from '@/app/projects/projectsSection';
import ShowRecentPosts from "@/app/blog/showRecentPosts";

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
            ShowRecentPosts={<ShowRecentPosts wrapperStyling={styling.recentPostsSection} includeHeader={true} blogpostWidth="w-3/4" />} 
            />
            
        </PageLayout>
    );
}