import Image from 'next/image';
import PageLayout from '@/app/_layoutComponents/pageLayout';
import ProjectsSection from '@/app/projects/projectsSection';
import { totalProjects } from '@/app/projects//projects.data';

export default function Projects() {
    const styling = {
        layout: "min-h-[calc(100vh-3rem)]",
        header: {
            wrapper: "flex justify-center items-center gap-x-3 h-20 border-y-1 border-grey bg-[hsl(67,27%,94%)] tablet:justify-start",
            icon: "w-[3.2rem] tablet:ml-12",
            text: "font-medium text-2xl"
        },
        projectsSection: "flex flex-col items-center py-16 px-20 box-border tablet:grid tablet:grid-cols-[repeat(auto-fit,minmax(250px,350px))] tablet:gap-16 tablet:py-16 tablet:px-12"
    };

    return (
        <PageLayout className={styling.layout}>
            
            <div className={styling.header.wrapper}>
                <Image 
                className={styling.header.icon} 
                width={100}
                height={100}
                src="/Icons/lampIcon.svg" 
                alt="" />
                <h2 className={styling.header.text}>My Projects ({totalProjects})</h2>
            </div>

            <ProjectsSection display="all" wrapperStyling={styling.projectsSection} includeHeader={false} />
    
        </PageLayout>
    );
}