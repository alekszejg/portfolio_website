import Project from "@/app/_homepage/project";
import projects from "@/app/_homepage/myProjects.json";

export default function MyProjects(props: {hasHeader: boolean}) {
    const styling = {
        section: "py-[3rem] px-[5%]",
        projectsGrid: "grid grid-cols-[repeat(2, 1fr)] gap-8 tablet:grid-cols-[repeat(4,minmax(160px,200px))] tablet:gap-x-12 tablet:gap-y-10"
    }

    return (
        <section className={styling.section}>
            {props.hasHeader && <h2>Projects</h2>}
            <div className={styling.projectsGrid}>
                <Project  {...projects.discordBot} />
                <Project {...projects.portfolioWebsite} />
                <Project {...projects.mangopostWebsite} />
            </div>
        </section>
    );
}