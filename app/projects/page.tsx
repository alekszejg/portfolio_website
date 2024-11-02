"use client"
import Image from 'next/image';
import PageLayout from '@/app/_layoutComponents/pageLayout';
import ProjectPreview, { ProjectImage } from '@/app/projects/projectPreview';
import { useState, useRef, useEffect} from 'react';


export default function AllProjects() {
    const styling = {
        layout: "min-h-[calc(100vh-3rem)]",
        header: {
            wrapper: "flex justify-center items-center h-20 border-y-1 border-grey bg-[hsl(67,27%,94%)] tablet:justify-start",
            icon: "w-[3.2rem] tablet:ml-[3.8rem]",
            text: "pl-4"
        },
        projectsWrapper: "flex flex-col items-center py-16 px-20 box-border tablet:grid tablet:grid-cols-[repeat(auto-fit,minmax(250px,350px))] tablet:gap-16 tablet:py-16 tablet:px-12"
    };

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

    const myWebsiteProps = {
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
        <PageLayout className={styling.layout}>
            <div className={styling.header.wrapper}>
                <Image 
                className={styling.header.icon} 
                width={100}
                height={100}
                src="/Icons/lampIcon.svg" 
                alt="lamp icon" />
                <h1 className={styling.header.text}>My Projects ({totalProjects})</h1>
            </div>
        
            <div className={styling.projectsWrapper} ref={totalChildren}>
                <ProjectPreview {...discordBotProps} />
                <ProjectPreview {...myWebsiteProps} />
                <ProjectPreview {...finalPreviewProps} />
            </div>
        </PageLayout>
    );
}