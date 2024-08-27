import NavMenu from '../Layout/nav';
import Footer from '../Layout/footer';
import ProjectFeaturePanel from '../Layout/panelMaker';
import 'Styling/portfolioStyles/botProjectPage.scss';


function BotProjectPage() {
    
    const aboutThisWebsiteDescr = `A Discord bot written in Python with \`discord.py\` module to simplify interactions with Discord's API. 
    It was my 1st experience with bot programming as well as event-driven programming. The bot has some standard features such as basic 
    interactions, reactions and entertainment. Its more advanced features include a music player, interactive role assignment, an advertisement 
    sender and a file sender to a specific location. Bot development will continue in future, when all its features and edge cases are finished
    and improved.`

    const musicPlayerProps = {
        imgContainerID: "musicPlayerImgContainer",
        imgID: "musicPlayerImg",
        imgSide: "left",
        imgSrc: "/Images/botMusicPlayer.png",
        imgAlt: "an image showing discord bot's music player",
        headerContent: "Look up the songs and play them!",
        paragraphContent: `Find and play songs from Youtube, Spotify and Soundcloud with simple <b>/search_youtube</b>,
        <b>/search_spotify</b> and <b>/search_soundcloud</b> commands. Each command includes a UI music player 
        to navigate through songs.`
    }

    const botResponsesProps = {
        imgContainerID: "responsesImgContainer",
        imgID: "responsesImg",
        imgSide: "right",
        imgSrc: "/Images/botResponses.png",
        imgAlt: "an image demonstrating the discord bot telling jokes, quotes and daily facts",
        headerContent: "Would you like to hear a joke, a quote or a daily fact?",
        paragraphContent: `The bot obtains various jokes and quotes from Ninja API and sends them 
        to anyone upon request with <b>/say_joke</b> and <b>/say_quote</b> commands. Once a day the bot will send a 
        daily fact for you to discuss.`
    }

    const botReactionRoleProps = {
        imgContainerID: "reactionImgContainer",       
        imgID: "reactionImg",
        imgSide: "left",
        imgSrc: "/Images/botReactionRoles.png",
        imgAlt: "an image demonstrating discord bot's reaction roles feature",
        headerContent: "Stop with manual role assignment",
        paragraphContent: `Add, remove, customize and view various available roles and let the bot handle the 
        rest. Get full control of reaction roles with <b>/view_reaction_roles</b>, <b>/add_reaction_roles</b> and <b>/remove_reaction_roles</b> 
        commands. Is everything ready? Use <b>/launch_reaction_roles</b> command to publish available reaction
        roles. Even afterwards, roles are still modifiable!` 
    }

    const botRandomGamesProps = {
        imgContainerID: "randomGamesImgContainer",
        imgID: "randomGamesImg",
        imgSide: "right",
        imgSrc: "/Images/randomGames.png",
        imgAlt: "an image demonstrating discord bot's random-based games and features",
        headerContent: "Whose turn is next?",
        paragraphContent: `Wonder no more, just launch one of bot's random-based games with <b>/diceroll</b>, 
        <b>/randomroll</b> or <b>/cointflip</b> commands to choose a randomizer of your liking and decide 
        who goes next!`
    }

    const botFileProps = {
        imgContainerID: "fileShareImgContainer",
        imgID: "fileShareImg",
        imgSide: "left",
        imgSrc: "/Images/botFiles.png",
        imgAlt: "an image demonstrating discord bot's ability to send files",
        headerContent: "Share up to 10 cute photos or documents with your community",
        paragraphContent: `The times of manual file uploads have passed, instead select files and choose where
        to send them with a single <b>/send_files</b> command. Send files to current channel only, or to all 
        channels on current server, or maybe to all the servers that bot has access to? It's doable and don't 
        forget a title and a description to go along with submission.`
    }
    
    return (
        <div id="projectPageLayout">
            <NavMenu />
            <div id="aboutProjectPanel">
                <h2 id="aboutProjectHeader">About the project</h2>
                <p id="aboutProjectText">{aboutThisWebsiteDescr}</p>
            </div>
            <ProjectFeaturePanel {...musicPlayerProps} />
            <ProjectFeaturePanel {...botResponsesProps} />
            <ProjectFeaturePanel {...botReactionRoleProps} />
            <ProjectFeaturePanel {...botRandomGamesProps} /> 
            <ProjectFeaturePanel {...botFileProps} />
            <Footer />
        </div> 
    );
}

export default BotProjectPage;

