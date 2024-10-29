import Project from "@/app/_homepage/project";


export default function MyProjects(props: {hasHeader: boolean}) {
    
    const discordBotProps = {
        githubUrl: "https://github.com/alekszejg/discord_bot_python",
        localUrl: "/projects/discord-bot",
        imgSrc: "/Images/Project Previews/discordBot.svg", 
        imgAlt: "discord bot icon",
        title: "Discord Bot"
    };

    const portfolioWebsiteProps = {
        githubUrl: "https://github.com/alekszejg/portfolio_website",
        localUrl: "/projects/portfolio-website",
        imgSrc: "/Images/Project Previews/thisWebsite.png", 
        imgAlt: "this website's homepage",
        title: "Portfolio Website"
    }

    const mangopostWebsiteProps = {
        githubUrl: "https://github.com/alekszejg/mangopost_nextjs",
        localUrl: "/projects/mangopost-website",
        imgSrc: "/Images/Project Previews/mangopostWebsite.png", 
        imgAlt: "Mangopost website screenshot",
        title: "Mangopost Website"
    }

    const magopostWebsiteProps = {
        githubUrl: "https://github.com/alekszejg/mangopost_nextjs",
        localUrl: "/projects/mangopost-website",
        imgSrc: "/Images/Project Previews/mangopostWebsite.png", 
        imgAlt: "Mangopost website screenshot",
        title: "Mangopost Website"
    }

    const mngopostWebsiteProps = {
        githubUrl: "https://github.com/alekszejg/mangopost_nextjs",
        localUrl: "/projects/mangopost-website",
        imgSrc: "/Images/Project Previews/mangopostWebsite.png", 
        imgAlt: "Mangopost website screenshot",
        title: "Mangopost Website"
    }

    const mangopotWebsiteProps = {
        githubUrl: "https://github.com/alekszejg/mangopost_nextjs",
        localUrl: "/projects/mangopost-website",
        imgSrc: "/Images/Project Previews/mangopostWebsite.png", 
        imgAlt: "Mangopost website screenshot",
        title: "Mangopost Website"
    }

    return (
        <section id="projectsSection">
            {props.hasHeader && <h2>Projects</h2>}
            <div id="projectsGrid">
                <Project  {...discordBotProps} />
                <Project {...portfolioWebsiteProps} />
                <Project {...mangopostWebsiteProps} />

                <Project {...magopostWebsiteProps} />
                <Project {...mngopostWebsiteProps} />
                <Project {...mangopotWebsiteProps} />
            </div>
        </section>
    );
}