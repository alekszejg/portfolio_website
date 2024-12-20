import urlPaths from "@/app/url.paths"


export type Project = {
    githubUrl: string, 
    localPath: string,
    imgSrc: string, 
    imgAlt: string, 
    title: string,
    isFinal?: boolean
};


export const allProjects: {[key: string]: Project} = {
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
    },

    comingSoon: {
        githubUrl: "",
        localPath: urlPaths.projects.base,
        imgSrc: "/Icons/hourglass.svg",
        imgAlt: "hourglass artwork",
        title: "More to come...",
        isFinal: true
    }
}

const { comingSoon, ...existingProjects } = allProjects
export const recentProjects = existingProjects; // later choose limit for recent projects


export const totalProjects = Object.keys(allProjects).length - 1;