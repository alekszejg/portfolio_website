import PageLayout from '@/app/_layoutComponents/pageLayout';
import ProjectStages from '@/app/projects/projectStages';
import ProjectFeaturePanel, { ImageType } from '@/app/projects/featurePanel';
import styling from '@/app/projects//styling';

export default function DiscordBotProjectPage() {
    const stages = [
        {stage: "About", text: `A Discord bot written in Python with discord.py module to simplify 
            interactions with Discord's API. It was my 1st experience with bot programming as well as 
            event-driven programming. The bot has some standard features such as basic interactions, 
            reactions and entertainment. Its more advanced features include a music player, interactive 
            role assignment, an advertisement sender and a file sender to a specific location. Bot 
            development will continue in future, when all its features and edge cases are finished and improved.`
        },
        {stage: "Planning", text: ``},
        {stage: "Development", text: ``}
    ];
    
    const musicPlayerProps = {
        imgType: "regular" as ImageType,
        imgSide: "left",
        imgSrc: "/Images/botMusicPlayer.png",
        imgAlt: "an image showing discord bot's music player",
        header: "Look up the songs and play them!",
        text: `Find and play songs from Youtube, Spotify and Soundcloud with simple <b>/search_youtube</b>,
        <b>/search_spotify</b> and <b>/search_soundcloud</b> commands. Each command includes a UI music player 
        to navigate through songs.`
    }

    const botResponsesProps = {
        imgType: "regular" as ImageType,
        imgSide: "right",
        imgSrc: "/Images/botResponses.png",
        imgAlt: "an image demonstrating the discord bot telling jokes, quotes and daily facts",
        header: "Would you like to hear a joke, a quote or a daily fact?",
        text: `The bot obtains various jokes and quotes from Ninja API and sends them 
        to anyone upon request with <b>/say_joke</b> and <b>/say_quote</b> commands. Once a day the bot will send a 
        daily fact for you to discuss.`
    }

    const botReactionRoleProps = {
        imgType: "regular" as ImageType,      
        imgSide: "left",
        imgSrc: "/Images/botReactionRoles.png",
        imgAlt: "an image demonstrating discord bot's reaction roles feature",
        header: "Stop with manual role assignment",
        text: `Add, remove, customize and view various available roles and let the bot handle the 
        rest. Get full control of reaction roles with <b>/view_reaction_roles</b>, <b>/add_reaction_roles</b> and <b>/remove_reaction_roles</b> 
        commands. Is everything ready? Use <b>/launch_reaction_roles</b> command to publish available reaction
        roles. Even afterwards, roles are still modifiable!` 
    }

    const botRandomGamesProps = {
        imgType: "regular" as ImageType,
        imgSide: "right",
        imgSrc: "/Images/randomGames.png",
        imgAlt: "an image demonstrating discord bot's random-based games and features",
        header: "Whose turn is next?",
        text: `Wonder no more, just launch one of bot's random-based games with <b>/diceroll</b>, 
        <b>/randomroll</b> or <b>/cointflip</b> commands to choose a randomizer of your liking and decide 
        who goes next!`
    }

    const botFileProps = {
        imgType: "regular" as ImageType,
        imgSide: "left",
        imgSrc: "/Images/botFiles.png",
        imgAlt: "an image demonstrating discord bot's ability to send files",
        header: "Share up to 10 cute photos or documents with your community",
        text: `The times of manual file uploads have passed, instead select files and choose where
        to send them with a single <b>/send_files</b> command. Send files to current channel only, or to all 
        channels on current server, or maybe to all the servers that bot has access to? It's doable and don't 
        forget a title and a description to go along with submission.`
    }
    
    return (
        <PageLayout className={styling.layout}>
            <section className={styling.about.section}>
                <h2 className={styling.about.header}>About the project</h2>
                <p className={styling.about.text}>A Discord bot written in Python with discord.py module to 
                    simplify interactions with Discord's API. It was my 1st experience with bot programming 
                    as well as event-driven programming. The bot has some standard features such as basic interactions, 
                    reactions and entertainment. Its more advanced features include a music player, interactive role 
                    assignment, an advertisement sender and a file sender to a specific location. Bot development 
                    will continue in future, when all its features and edge cases are finished and improved.
                </p>
            </section>
            <ProjectStages stages={stages} />
            <ProjectFeaturePanel {...musicPlayerProps} />
            <ProjectFeaturePanel {...botResponsesProps} />
            <ProjectFeaturePanel {...botReactionRoleProps} />
            <ProjectFeaturePanel {...botRandomGamesProps} /> 
            <ProjectFeaturePanel {...botFileProps} />
        </PageLayout> 
    );
}

