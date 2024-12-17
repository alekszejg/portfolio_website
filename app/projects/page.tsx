import Image from 'next/image';
import PageLayout from '@/app/_layoutComponents/pageLayout';
import ProjectsSection from '@/app/projects/projectsSection';
import { totalProjects } from '@/app/projects//projects.data';
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Browse Projects - Alexey Guljajev",
    description: `Click to view all finished and ongoing projects that I have built. It's not
    a lot yet, but there is a much more to come!`
};


export default function Projects() {
    const styling = {
        layout: "max-w-[1400px] py-8 ultrawide:mx-auto",
        header: {
            wrapper: "flex justify-center items-center gap-x-2 mb-6 mx-[5%] relative right-1.5 tablet:justify-start",
            icon: "w-8 relative bottom-[1px]",
            text: "font-medium text-2xl"
        },
        projectsSection: "mx-[5%]"
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
                <h2 className={styling.header.text}>MY PROJECTS ({totalProjects})</h2>
            </div>

            <ProjectsSection display="all" wrapperStyling={styling.projectsSection} includeHeader={false} />
    
        </PageLayout>
    );
}