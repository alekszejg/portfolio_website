import PageLayout from 'Components/Layout/pageLayout';
import ProjectPreview, { ProjectImage } from 'Components/Projects/projectPreview';
import 'Styling/Pages/allProjects.scss';
import { useState, useRef, useEffect} from 'react';


export default function MyProjects() {
    
    const totalChildren = useRef<HTMLDivElement>(null);
    const [totalProjects, setTotalProjects] = useState(0);

    useEffect(() => {
        const elementCount = totalChildren.current?.children.length || 0;
        setTotalProjects(elementCount - 1);
    }, [])
    
    const discordBotProps = {
        urlPath: "/projects/discord-bot",
        imgType: "svg" as ProjectImage,
        imgSrc: "/Images/discordLogo.svg",
        imgAlt: "discord bot",
        title: "Discord Bot",
        description: `A Discord bot written in Python with discord.py module to 
                    simplify interactions with Discord's API. It was my 1st experience with bot programming 
                    as well as event-driven programming. The bot has some standard features such as basic interactions, 
                    reactions and entertainment. Its more advanced features include a music player, interactive role 
                    assignment, an advertisement sender and a file sender to a specific location. Bot development 
                    will continue in future, when all its features and edge cases are finished and improved.`
    }

    const thisWebsiteProps = {
        urlPath: "/projects/portfolio-website",
        imgType: "standard" as ProjectImage,
        imgSrc: "/Images/thisWebsite.png",
        imgAlt: "folder structure image of this website",
        title: "This Website",
        description: `This is a 1st website that I have created. Since website development takes time, 
                I wanted to experiment and use as many technologies as possible, to gain some priceless 
                experience. Below I'll uncover and explain some "behind the scenes" moments and decisions 
                that during website's production.`
        }

    const finalPreviewProps = {
        urlPath: "/projects",
        imgType: "svg" as ProjectImage,
        imgSrc: "/Icons/hourglass.svg",
        imgAlt: "hourglass",
        title: "More to come...",
        finalPreview: true
    }
    
    return (
        <PageLayout layoutID="allProjectsLayout">
            <div id="mainHeaderContainer">
                <img id="lampIcon" src="/Icons/lampIcon.svg" alt="lamp icon" />
                <h1 id="mainProjectHeader">My Projects ({totalProjects})</h1>
            </div>
        
            <div id="projectContainer" ref={totalChildren}>
                <ProjectPreview {...discordBotProps} />
                <ProjectPreview {...thisWebsiteProps} />
                <ProjectPreview {...finalPreviewProps} />
            </div>
        </PageLayout>
    );
}

