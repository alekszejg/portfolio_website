import PageLayout from '@/app/_layoutComponents/pageLayout';
import HeroSection from '@/app/projects/(project pages)/_sections/hero/heroSection';
import { allProjects } from '@/app/projects/projects.data';
import OverviewSection from '@/app/projects/(project pages)/_sections/overview/overview';
import FeaturesSection, { FeatureProps } from '@/app/projects/(project pages)/_sections/features/featuresSection';
import styling from '@/app/projects/(project pages)/styling.wrappers';
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Multifunctional Discord Bot - Alexey Guljajev's Projects",
    description: `A bot that goes beyond basic user interactions, entertainment and event reactions, 
    offering more advanced features like interactive role assignment...`
};


export default function DiscordBotProjectPage() {
    const heroProps = {
        header: "Multifunctional Discord Bot",
        text: `A bot that goes beyond basic user interactions, entertainment and event reactions, 
        offering more advanced features like interactive role assignment, ad posting, 
        file sharing, a YouTube music player and much more.`,
        imgWrapperStyling: "tablet:h-5/6",
        imgSrc: "/Images/Project Previews/discordBotTransparentBg.svg",
        imgAlt: allProjects.discordBot.imgAlt,
        githubUrl: allProjects.discordBot.githubUrl,
        localPath: allProjects.discordBot.localPath
    };


    const imageList = [
        {
            src: "/Images/Projects/DiscordBot/musicPlayer.png", 
            alt: "bot's music player", 
            description: "Create music playlists and play songs added from YouTube"
        },
        {
            src: "/Images/Projects/DiscordBot/responses.png",
            alt: "bot telling jokes, quotes and daily facts",
            description: "Receive jokes, quotes or daily facts on command"
        },
        {
            src: "/Images/Projects/DiscordBot/reactionRoles.png",
            alt: "bot's reaction roles creator and manager",
            description: "Create and manage server's reaction roles available for members to select"
        },
        {
            src: "/Images/Projects/DiscordBot/chanceGames.png",
            alt: "bot's chance games",
            description: "Toss a coin, roll dice or get a random number on command"
        },
        {
            src: "/Images/Projects/DiscordBot/fileSender.png",
            alt: "bot's file sender",
            description: "Send files to specific text channels or other servers"
        }
    ];


    const stages = [
        {header: "About", text: `A Discord bot written in Python with discord.py module to simplify 
            interactions with Discord's API. It was my 1st experience with bot programming as well as 
            event-driven programming. The bot has some standard features such as basic interactions, 
            reactions and entertainment. Its more advanced features include a music player, interactive 
            role assignment, an advertisement sender and a file sender to a specific location. Bot 
            development will continue in future, when all its features and edge cases are finished and improved.`
        },
        {header: "Planning", text: `Before I started implementing my ideas into the Discord Bot, I had to 
            familiarize myself with couple of tutorials that explained basics of Discord.py module as well as 
            positibilities and limitations of Discord Api from reading official documentations on both Discord's 
            and Discord.py websites. The most challenging part was understanding how OOP works, which objects are
            related and can be used to obtain information on other objects.`
        },
        {header: "Development", text: `Development started with testing message content detection and making
            bot do basic interactions with user. Later I was testing bot's limitations by developing ability
            to advertise through it to current specific text channel, either current or all servers it's in. As 
            I got more confident, I implemented some mini-games along with fetching jokes/facts from Ninja API, then
            developed interactive reaction roles and Youtube music player with FFMPEG.`
        }
    ];

    
    const featureList: FeatureProps[] = [
        {
            imgSrc: "/Images/Projects/DiscordBot/musicPlayer.png",
            imgAlt: "bot's music player",
            header: "Look up the songs and play them!",
            text: `Find and play songs from Youtube, Spotify and Soundcloud with simple 
            <b>/search_youtube</b>, <b>/search_spotify</b> and <b>/search_soundcloud</b> commands. 
            Each command includes a UI music player to navigate through songs.`
        },
        {
            imgSrc: "/Images/Projects/DiscordBot/responses.png",
            imgAlt: "bot telling jokes, quotes and daily facts",
            header: "Would you like to hear a joke, a quote or a daily fact?",
            text: `The bot obtains various jokes and quotes from Ninja API and sends them to anyone upon 
            request with <b>/say_joke</b> and <b>/say_quote</b> commands. Once a day the bot will send a 
            daily fact for you to discuss.`
        },
        {    
            imgSrc: "/Images/Projects/DiscordBot/reactionRoles.png",
            imgAlt: "bot's customizable and interactive reaction roles",
            header: "Stop with manual role assignment",
            text: `Add, remove, customize and view various available roles and let the bot handle the 
            rest. Get full control of reaction roles with <b>/view_reaction_roles</b>, 
            <b>/add_reaction_roles</b> and <b>/remove_reaction_roles</b> commands. Is everything ready? 
            Use <b>/launch_reaction_roles</b> command to publish available reaction roles. Even 
            afterwards, roles are still modifiable!` 
        },
        {
            imgSrc: "/Images/Projects/DiscordBot/chanceGames.png",
            imgAlt: "bot's chance games",
            header: "Whose turn is next?",
            text: `Wonder no more, just launch one of bot's chance games with <b>/diceroll</b>, 
            <b>/randomroll</b> or <b>/cointflip</b> commands to choose a randomizer of your liking and 
            decide who goes next!`
        },
        {
            imgSrc: "/Images/Projects/DiscordBot/fileSender.png",
            imgAlt: "bot's file sender",
            header: "Share up to 10 cute photos or documents with your community",
            text: `The times of manual file uploads have passed, instead select files and choose where
            to send them with a single <b>/send_files</b> command. Send files to current channel only, 
            or to all channels on current server, or maybe to all the servers that bot has access to? 
            It's doable and don't forget a title and a description to go along with submission.`
        }
    ];
    
    return (
        <PageLayout className={styling.layout}>
            
            <HeroSection {...heroProps} />
            
            <OverviewSection wrapperStyling={styling.overviewSection} images={imageList} stages={stages} />
            
            <FeaturesSection featureList={featureList} />

        </PageLayout> 
    );
}

