import ProjectPreview from "@/app/projects/projectPreview";
import { allProjects, recentProjects } from '@/app/projects/projects.data';


type ProjectsSectionProps = {
    display: "all" | "recent", 
    wrapperStyling: string,
    includeHeader: boolean,
};


export default function ProjectsSection({ display, wrapperStyling, includeHeader}: ProjectsSectionProps) {
    const styling = {
        section: wrapperStyling,
        header: "hidden font-medium text-xl tablet:block tablet:mb-4",
        projectsGrid: "flex flex-col gap-y-10 tablet:grid tablet:grid-cols-[repeat(auto-fit,minmax(160px,220px))] tablet:gap-x-12"
    }

    const displayOption = (display === "all" ? allProjects : recentProjects);

    return (
        <section className={styling.section}>
            {includeHeader && <h2 className={styling.header}>RECENT PROJECTS</h2>}
    
            <div className={styling.projectsGrid}>
                {Object.keys(displayOption).map((key: keyof typeof displayOption, index) => (
                    <ProjectPreview key={`preview${index + 1}`} {...displayOption[key]} />
                ))}
            </div>

        </section>
    );
}