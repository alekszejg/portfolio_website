import Project from "@/app/_homepage/recentProjects/project";
import { recentProjects } from "@/app/projects/projects.data";

export default function RecentProjects({ hasHeader }: {hasHeader: boolean}) {
    const styling = {
        section: "py-[3rem] px-[5%]",
        projectsGrid: "grid grid-cols-[repeat(2, 1fr)] gap-8 tablet:grid-cols-[repeat(4,minmax(160px,200px))] tablet:gap-x-12 tablet:gap-y-10"
    }

    return (
        <section className={styling.section}>
            
            {hasHeader && <h2>Projects</h2>}
            
            <div className={styling.projectsGrid}>
                <Project  {...recentProjects.discordBot} />
                <Project {...recentProjects.portfolioWebsite} />
                <Project {...recentProjects.mangopostWebsite} />
            </div>
            
        </section>
    );
}