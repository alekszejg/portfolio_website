"use client"

import StackLogoRow from "./stackLogoRow";
import TechSkillLogo from "./techSkillLogo";

import { useState } from "react";

export default function MyStack() {
    const [currentTool, setCurrentTool] = useState("HTML");
    
    const handleLogoClick = (toolName: string) => {
        toolName !== currentTool && setCurrentTool(toolName);
    };

    interface techStackTypes {name: string; text: string; image: string; alt: string};
    const techStack: {[key: string]: techStackTypes} = {
        "HTML": {
            name: "HTML", 
            text: `As it is the foundation of web development I am quite confident with it, but I still
            learn new information and tricks when making projects, which wouldn't be otherwise obtained through reading
            theory and tutorials.`, 
            image: "Images/Logos/html.svg",
            alt: "HTML clickable Logo"
        },
        "CSS": {
            name: "CSS", 
            text: `As it is the foundation of web development I am quite confident with it, but I still
            learn new information and tricks when making projects, which wouldn't be otherwise obtained through reading
            theory and tutorials.`, 
            image: "Images/Logos/css.svg",
            alt: "CSS clickable Logo"
        },
        "Sass / SCSS": {
            name: "Sass / SCSS", 
            text: `This personal website is my 1st experience with it. While Tailwind would be better for such project
            with many components, working with SCSS allows me to practice and improve my CSS, while achieving smaller stylesheets
            with simple-syntaxed variables, mixins and nesting, which leads to significant improvements in code readability
            and maintability.`, 
            image: "Images/Logos/sass.svg",
            alt: "Sass / SCSS clickable Logo"
        },
        "Tailwind CSS": {
            name: "Tailwind CSS", 
            text: `My favourite way to write CSS up to now. It allows to me to stop assigning my own IDs and classnames
            to elements, offers faster and more readable assignment of styles based on events and conditions and overall saves 
            time looking at separate stylesheets during programming, instead it focuses my attention on achieving final result. 
            While it would make HTML or JavaScript content larger and less readable, I found out that keeping all styles in organized
            and categorized dictionary allows more control of children components through parent and offers quick overview of all
            applied styles.`, 
            image: "Images/Logos/tailwind.svg",
            alt: "Tailwind CSS clickable logo"
        },

        "JavaScript": {
            name: "JavaScript", 
            text: `Where my programing Journey has started and I've spent first few months studying the theory
            which introduced me to standard and JS-specific programming concepts, allowing smoother transition into
            TypeScript and React.js programming. Knowledge of standard JavaScript opens opportunities for advanced customization
            of UI and services offered by other people, if frontend is editable. As an example, I used JavaScript to 
            customize default behaviour and styling of AddEvent.com calendars and events of AddEvent.com for Mangopost 
            company as well as edit stickers they have printed from Backend data.`, 
            image: "Images/Logos/js.svg",
            alt: "JavaScript clickable logo"
        },
        "TypeScript": {
            name: "TypeScript", 
            text: `My practical webdev experience started with TypeScript which made it a good habbit to include
            it to every project. Development of my 2nd website has reduced my TypeErrors to minimum along with time it takes me
            to spot the issues. While I'm enjoying the lack of unexpected type and syntax errors during the development 
            along with great features like optional object's properties, simple typeguards and clearly defined function parameters,
            I aim to keep learning and using more of its advanced features to make the types more reusable and my code more readable.`,
            image: "Images/Logos/ts.svg",
            alt: "TypeScript clickable logo"
        },
        "Python": {
            name: "Python", 
            text: `My 2nd programming language that I use for testing various ideas and algorithms less related to 
            webdev. Creating a practice mini projects like activity multi-timer gave me better knowledge of OOP as a concept,
            similarly to developing a Python-based Discord Bot introducing me to event-based programming and more OOP. I have also 
            experimented with Tensorflow and Pytorch on basic level. In future I would like to apply Python to web development, due to
            Django being a go-to among programmers I know. Perhaps I could also return to learning Flask for quicker prototyping 
            during Backend development.`, 
            image: "/Images/Logos/python.svg",
            alt: "Python clickable logo"
        },
        
        "React.js": {
            name: "React.js", 
            text: `The framework I used for creating 2 websites: this and one for Mangopost company, which I later migrated
            to Next.js for better SEO and simplified backend for React. I am confident in my ability to develop web 
            applications with it, but I look for new problems to challenge me and see what I am capable of achieving.
            For future I want myself to be familiar with React's newer features and aim to find a workplace which will 
            push my limits and teach me conventional industry way of programming on it.`, 
            image: "/Images/Logos/react.svg",
            alt: "React.js clickable logo"
        },
        "Next.js": {
            name: "Next.js", 
            text: `I had an opportunity to migrate Mangopost website from it from React.js
            and plan to migrate this website too. I am happy to receive new possibilities that it adds to React including 
            server-side components, new structured App Routing and simple way to configurate HTTP headers. I look forward to 
            opportunities which will allow me to learn its backend-specific features more, before calling myself 
            knowledgeable in it.`, 
            image: "/Images/Logos/nextjs.svg",
            alt: "Next.js clickable logo"
        }
    };

    return (
        <div id="myStackWrapper">

            <div id="allLogosWrapper">
                <StackLogoRow id="htmlcssStackRow">
                    <TechSkillLogo currentTool={currentTool} name="HTML" imgSrc={techStack["HTML"].image} imgAlt={techStack["HTML"].alt} onClick={handleLogoClick} />
                    <TechSkillLogo currentTool={currentTool} name="CSS" imgSrc={techStack["CSS"].image} imgAlt={techStack["CSS"].alt} onClick={handleLogoClick} />
                    <TechSkillLogo currentTool={currentTool} name="Sass / SCSS" imgSrc={techStack["Sass / SCSS"].image} imgAlt={techStack["Sass / SCSS"].alt} onClick={handleLogoClick} />
                    <TechSkillLogo currentTool={currentTool} name="Tailwind CSS" imgSrc={techStack["Tailwind CSS"].image} imgAlt={techStack["Tailwind CSS"].alt} onClick={handleLogoClick} />
                </StackLogoRow>

                <StackLogoRow id="languageStackRow">
                    <TechSkillLogo currentTool={currentTool} name="JavaScript"imgSrc={techStack["JavaScript"].image} imgAlt={techStack["JavaScript"].alt} onClick={handleLogoClick} />
                    <TechSkillLogo currentTool={currentTool} name="TypeScript"imgSrc={techStack["TypeScript"].image} imgAlt={techStack["TypeScript"].alt} onClick={handleLogoClick} />
                    <TechSkillLogo currentTool={currentTool} name="Python" imgSrc={techStack["Python"].image} imgAlt={techStack["Python"].alt} onClick={handleLogoClick} />
                </StackLogoRow>

                <StackLogoRow id="frameworkStackRow">
                    <TechSkillLogo currentTool={currentTool} name="React.js" imgSrc={techStack["React.js"].image} imgAlt={techStack["React.js"].alt} onClick={handleLogoClick} />
                    <TechSkillLogo currentTool={currentTool} name="Next.js" imgSrc={techStack["Next.js"].image} imgAlt={techStack["Next.js"].alt} onClick={handleLogoClick} />
                </StackLogoRow>
            </div>

            <div id="toolDescriptionWrapper">
                <h3>{techStack[currentTool as keyof techStackTypes].name}</h3>
                <p>{techStack[currentTool as keyof techStackTypes].text}</p>
            </div>
        </div>
    );
}