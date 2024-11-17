import urlPaths from "@/app/url.paths"


export const allProjects = {
    discordBot: {
        githubUrl: urlPaths.projects.discordBot.githubUrl,
        localPath: urlPaths.projects.discordBot.localPath,
        imgSrc: "/Images/Project Previews/discordBot.svg", 
        imgAlt: "discord bot artwork",
        title: "Discord Bot"
    },

    portfolioWebsite: {
        githubUrl: urlPaths.projects.portfolioWebsite.githubUrl,
        localPath: urlPaths.projects.portfolioWebsite.localPath,
        imgSrc: "/Images/Project Previews/thisWebsite.png", 
        imgAlt: "this website's homepage",
        title: "Portfolio Website"
    },

    mangopostWebsite: {
        githubUrl: urlPaths.projects.mangopostWebsite.githubUrl,
        localPath: urlPaths.projects.mangopostWebsite.localPath,
        imgSrc: "/Images/Project Previews/mangopostWebsite.png", 
        imgAlt: "Mangopost website screenshot",
        title: "Mangopost Website"
    }
}

export const recentProjects = allProjects; // later choose limit for recent projects
