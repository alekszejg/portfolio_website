import PageLayout from '@/app/_layoutComponents/pageLayout';
import HeroSection from '@/app/projects/(project pages)/_sections/hero/heroSection';
import { allProjects } from '@/app/projects/projects.data';
import OverviewSection from '@/app/projects/(project pages)/_sections/overview/overview';
import FeaturesSection, { FeatureProps } from '@/app/projects/(project pages)/_sections/features/featuresSection';
import styling from '@/app/projects/(project pages)/styling.wrappers';
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Portfolio Website - Alexey Guljajev's Projects",
    description: `My personal website featuring an interactive CV, detailed information about 
    completed as well as ongoing projects, and a blog section...`
};



export default function PortfolioWebsiteProjectPage() {
    const heroProps = {
        header: "Portfolio Website",
        text: `My personal website featuring an interactive CV, detailed information about 
        completed as well as ongoing projects, and a blog section displaying posts I write.`,
        imgWrapperStyling: "tablet:h-3/4 tablet:rounded-3xl tablet:opacity-[78%]",
        imgStylingExtra: "shadow-[0_0_0.1rem_rgb(120,120,120)]",
        imgSrc: allProjects.portfolioWebsite.imgSrc,
        imgAlt: allProjects.portfolioWebsite.imgAlt,
        githubUrl: allProjects.portfolioWebsite.githubUrl,
        localPath: allProjects.portfolioWebsite.localPath
    };


    const imageList = [
        {
            src: "/Images/Projects/PortfolioWebsite/homepage.png", 
            alt: "This website's homepage",
            description: "Homepage styled as social network profile for intuitive interpretation by website visitors"
        },
        {
            src: "/Images/Projects/PortfolioWebsite/interactiveCV.png",
            alt: "My interactive CV page on this website",
            description: "Interactive CV available publicly, without the need to download any files"
        },
        {
            src: "/Images/Projects/PortfolioWebsite/projectExample.png",
            alt: "Example of a project page on my website",
            description: "Reusable code allows consistant structure and styling of project webpages"
        },
        {
            src: "/Images/Projects/PortfolioWebsite/adminPage.png",
            alt: "Admin page on this website",
            description: "Admin page for performing authorized actions: managing blogposts and messages"
        },
    ];


    const stages = [
        {header: "About", text: `This is a 1st website that I have created. Since website development takes time, 
            I wanted to experiment and use as many technologies as possible, to gain some priceless experience. 
            Below I'll uncover and explain some "behind the scenes" moments and decisions that during website's 
            production.`
        },
        {header: "Planning", text: `At first I planned this website to simply be an interactive CV similar to one I have, but
            offer more details and interactivity which regular CV wouldn't allow and also have separate webpages
            for each of my projects with short description and their features along with some images. Later it grew
            into a larger project with a homepage which is similar to a social media profile, blog section, improved
            contact form and overall with more advanced styling.`
        },
        {header: "Development", text: `I first developed it using SCSS and React, however later migrated to Next.js for server-side
            benefits as well as migrated to Tailwind to be able to experiment with styling faster and spend less time on it.
            It taught me a lot of new things such as basic implementation of Next Auth for admin page and working with
            PostgreSQL to handle incoming messages and display blogposts that I make.`
        },
        {header: "Production", text: `This will be updated after my website becomes accessible to public.`}
    ];

    
    const featureList: FeatureProps[] = [
        {
            imgSrc: "/Images/Projects/PortfolioWebsite/homepage.png",
            imgAlt: "This website's homepage",
            header: "Intuitive homepage design similar to social networks",
            text: `Homepage serves as a summary of a website's content and is styled like a social network 
            profile for better readability and intuitiveness. This familiar design leverages the popularity 
            of social apps, making visitors subconsciously understand its structure and functionality."`,
        },
        {
            imgSrc: "/Images/Projects/PortfolioWebsite/interactiveCV.png",
            imgAlt: "My interactive CV page on this website",
            header: "Accessible interactive CV",
            text: `The interactive CV page provides a detailed summary about me directly on the website, 
            eliminating the need to download a file. This web-based resume enhances user engagement by 
            offering optional details through dropdowns and responding dynamically to scrolling and 
            cursor movements.`
        },
        {
            imgSrc: "/Images/Projects/PortfolioWebsite/projectExample.png",
            imgAlt: "Example of a project page on my website",
            header: "Reusable code for project pages",
            text: `Each project on my website is presented as an individual webpage, requiring a consistent 
            structure and design. To achieve this, my code is built to only need text and image data, ensuring 
            a uniform and straightforward layout across all project pages.`,
        },
        {
            imgSrc: "/Images/Projects/PortfolioWebsite/adminPage.png",
            imgAlt: "Admin page on this website",
            header: "Admin page for managing blogposts and messages",
            text: `The admin page provides authorized access to perform actions like adding or removing blogposts 
            via the UI and reading incoming user messages.`
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
