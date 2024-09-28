import PageLayout from '@/app/_layoutComponents/pageLayout';
import ProjectFeaturePanel, { ImageWrapper } from '@/app/projects/featurePanel';
import '@/Styling/Portfolio/thisWebsite.scss';


export default function MyWebsiteProjectPage() {
    
    const sassToolProps = {
        imgWrapperClass: "svgImgWrapper" as ImageWrapper,
        imgID: "sassLogoImg",
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
        customizable and optimized CSS.`
    }

    const reactLibraryProps = {
        imgWrapperClass: "svgImgWrapper" as ImageWrapper,
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
    }

    const typeScriptProps = {
        imgWrapperClass: "svgImgWrapper" as ImageWrapper,
        imgID: "typescriptLogoImg",
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
        conditional statements and objects with optional properties.`
    }

    const iconCollectionProps = {
        imgWrapperClass: "svgImgWrapper" as ImageWrapper,
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

    return (
        <PageLayout layoutID="projectPageLayout">
            <div id="aboutProjectPanel">
                <h2 id="aboutProjectHeader">About the project</h2>
                <p id="aboutProjectText">This is a 1st website that I have 
                created. Since website development takes time, I wanted to experiment
                and use as many technologies as possible, to gain some priceless 
                experience. Below I'll uncover and explain some "behind the scenes"
                moments and decisions that during website's production. 
                </p>
            </div>
            <ProjectFeaturePanel {...sassToolProps} />
            <ProjectFeaturePanel {...reactLibraryProps} />
            <ProjectFeaturePanel {...typeScriptProps} />
            <ProjectFeaturePanel {...iconCollectionProps} />
        </PageLayout> 
    );
}
