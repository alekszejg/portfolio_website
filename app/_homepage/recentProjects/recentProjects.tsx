import Project from "@/app/_homepage/recentProjects/project";
import { recentProjects } from "@/app/projects/projects.data";

export default function RecentProjects() {
    const styling = {
        header: "hidden tablet:block",
        projectsGrid: "grid grid-cols-[repeat(2, 1fr)] gap-8 tablet:grid-cols-[repeat(4,minmax(160px,200px))] tablet:gap-x-12 tablet:gap-y-10"
    }

    return (
        <>
        <h2 className={styling.header}>Projects</h2>
        
        <div className={styling.projectsGrid}>
            <Project  {...recentProjects.discordBot} />
            <Project {...recentProjects.portfolioWebsite} />
            <Project {...recentProjects.mangopostWebsite} />
        </div>
        </>
    );
}