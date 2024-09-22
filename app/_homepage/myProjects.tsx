import Project from "./project";


export default function MyProjects(props: {hasHeader: boolean}) {
    
    return (
        <section id="projectsSection">
            {props.hasHeader && <h2>Projects</h2>}
            <div id="projectsGrid">
                <Project imgSrc="/Images/Project Previews/discordBot.svg" imgAlt="discord bot icon" title="Discord Bot" />
                <Project imgSrc="" imgAlt="this website's homepage" title="Portfolio Website" />
                <Project imgSrc="/Images/Project Previews/mangopostWebsite.png" imgAlt="mangopost homepage" title="Mangopost Website" />
            </div>
        </section>
    );
}