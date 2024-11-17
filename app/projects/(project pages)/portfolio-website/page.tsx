import PageLayout from '@/app/_layoutComponents/pageLayout';
import HeroSection from '@/app/projects/(project pages)/heroSection';
import PreviewSection from '@/app/projects/(project pages)/previewSection';
import ProjectFeaturePanel, { ImageType } from '@/app/projects/(project pages)/projectFeature';
import { allProjects } from '@/app/projects/(project pages)/projects.data';
import styling from '@/app/projects/(project pages)/styling.wrappers';
import type { ProjectFeatureProps } from '@/app/projects/(project pages)/projectFeature';


export default function PortfolioWebsiteProjectPage() {
    const heroProps = {
        header: "Portfolio Website",
        text: `My personal website featuring an interactive CV, detailed information about 
        completed as well as ongoing projects, and a blog section displaying my posts.`,
        imgWrapperStyling: "h-3/4 rounded-3xl opacity-[78%]",
        imgStylingExtra: "shadow-[0_0_0.1rem_rgb(120,120,120)]",
        imgSrc: allProjects.portfolioWebsite.imgSrc,
        imgAlt: allProjects.portfolioWebsite.imgAlt,
        githubUrl: allProjects.portfolioWebsite.githubUrl,
        localPath: allProjects.portfolioWebsite.localPath
    };


    const imageList = [
        {
            src: "", 
            alt: "",
            description: ""
        }
    ];


    const stages = [
        {stage: "About", text: `This is a 1st website that I have created. Since website development takes time, 
            I wanted to experiment and use as many technologies as possible, to gain some priceless experience. 
            Below I'll uncover and explain some "behind the scenes" moments and decisions that during website's 
            production.`
        },
        {stage: "Planning", text: `At first I planned this website to simply be an interactive CV similar to one I have, but
            offer more details and interactivity which regular CV wouldn't allow and also have separate webpages
            for each of my projects with short description and their features along with some images. Later it grew
            into a larger project with a homepage which is similar to a social media profile, blog section, improved
            contact form and overall with more advanced styling.`
        },
        {stage: "Development", text: `I first developed it using SCSS and React, however later migrated to Next.js for server-side
            benefits as well as migrated to Tailwind to be able to experiment with styling faster and spend less time on it.
            It taught me a lot of new things such as basic implementation of Next Auth for admin page and working with
            PostgreSQL to handle incoming messages and display blogposts that I make.`
        },
        {stage: "Production", text: `This will be updated after my website becomes accessible to public.`}
    ];

    
    const featureList = [
        {
            imgType: "svg" as ImageType,
            imgSide: "left",
            imgSrc: "/Images/Logos/sass.svg",
            imgAlt: "a SASS logo",
            header: "Styled with SCSS. No CSS libraries were used",
            text: `While CSS libraries and website constructors offer easier
            and more efficient front-end processes, using plain CSS along with its 
            SCSS preprocessor is beneficial for a 1st website and in long-term perspective.
            Understanding most common CSS properties, SCSS features and their lesser 
            known issues will help me master any website constructor or UI library and 
            perform changes to their output when needed. Knowledge of SCSS preprocessor, 
            at least its common features allows to write shorter, readable, more 
            customizable and optimized CSS.`,
            imgExtraStyling: "rounded-[50%]"
        },
        {
            imgType: "svg" as ImageType,
            imgSide: "right",
            imgSrc: "/Images/Logos/react.svg",
            imgAlt: "a React logo",
            header: "Front-end built with React library",
            text: `React is the most popular tool that promotes code reuse 
            and simplifies JavaScript programming, which then allows me to work with 
            wider range of developers and easily find external packages and tools that
            work with it. React's code and JSX syntax are easy to read and proper 
            organization enables quick navigation between components. Additionally 
            its external packages offer great SASS/SCSS and TypeScript support to 
            further assist with programming. I'm interested to make a Vue or Svelte 
            project afterwards, as well as to continue using React.`
        },
        {
            imgType: "svg" as ImageType,
            imgSide: "left",
            imgSrc: "/Images/Logos/ts.svg",
            imgAlt: "a TypeScript logo",
            header: "TypeScript over plain JavaScript",
            text: `Development of this website gave me some practical experience 
            with TypeScript which I haven't had before. While some time is spent defining
            and locating the necessary types, it pays off after several found type errors.
            Other important benefits of TypeScript that I didn't expect involve quicker 
            recognition of function's parameters and component's props, especially when 
            coming back to the project after a break, as well as ability to create type-based
            conditional statements and objects with optional properties.`,
            imgExtraStyling: "rounded-[2rem] tablet:rounded-[2.9rem]"
        },
        {
            imgType: "svg" as ImageType,
            imgSide: "right",
            imgSrc: "/Images/iconGroup.svg",
            imgAlt: "a collection of icons",
            header: "Using Font Awesome icons and making custom ones with Figma",
            text: `Icons are essential when it comes to visually highlighting 
            important information or to indicate specific features and functionality of 
            some UI elements. I used Font Awesome to access some universally recognizable 
            icons, while learning and using Figma to make specific and more unique icons,
            which gave me full control of icon's dimensions, colors and other design 
            choices.`
        }
    ];

    return (
        <PageLayout className={styling.layout}>
            
            <HeroSection {...heroProps} />
            
            <PreviewSection images={imageList} stages={stages} />
            
            {featureList.map((featureProps: ProjectFeatureProps, index) => (
                <ProjectFeaturePanel key={`feature${index + 1}`} {...featureProps} />
            ))}
            
        </PageLayout> 
    );
}
