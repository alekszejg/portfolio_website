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
        header: "hidden tablet:block",
        projectsGrid: "grid grid-cols-[repeat(2, 1fr)] gap-8 tablet:grid-cols-[repeat(4,minmax(160px,200px))] tablet:gap-x-12 tablet:gap-y-10"
    }

    const displayOption = (display === "all" ? allProjects : recentProjects);

    return (
        <section className={styling.section}>
            {includeHeader && <h2 className={styling.header}>Recent Projects</h2>}
    
            <div className={styling.projectsGrid}>
                {Object.keys(displayOption).map((key: keyof typeof displayOption, index) => (
                    <ProjectPreview key={`preview${index + 1}`} {...displayOption[key]} />
                ))}
            </div>

        </section>
    );
}