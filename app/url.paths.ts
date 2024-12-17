const urlPaths = {
    homepage: "/",
    cv: "/interactive-cv",
    projects: {
       base: "/projects",

       discordBot: {
        githubUrl: "https://github.com/alekszejg/discord_bot_python",
        localPath: "/projects/discord-bot",
       },

       portfolioWebsite: {
        githubUrl: "https://github.com/alekszejg/portfolio_website",
        localPath: "/projects/portfolio-website",
       },

       mangopostWebsite: {
        githubUrl: "https://github.com/alekszejg/mangopost_nextjs",
        localPath: "/projects/mangopost-website",
       }
    },
    admin: "/admin",
    misc: {
        myAccounts: {
            whatsapp: "https://wa.me/491746541424",
            github: "https://github.com/alekszejg",
            tryhackme: "https://tryhackme.com/p/alekszejg",
        },
        external: {
            verifyRecaptcha: "https://www.google.com/recaptcha/api/siteverify?",
        }
    }
};


export default urlPaths;