import myPhoto from 'Images/myPhoto.png';
import 'Styling/mainPagesStyles/homepageMobile.scss';
import 'Styling/mainPagesStyles/homepagePC.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMapLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import contactIcon from 'Icons/contactIcon.svg';
import contactBookIcon from 'Icons/contactBookIcon.svg';
import warningSignIcon from 'Icons/warningSignIcon.svg';
import blackArrowDownIcon from 'Icons/blackArrowDown.svg';
import educationHatIcon from 'Icons/educationHat.svg';
import gearIcon from 'Icons/gearIcon.svg';
import speechIcon from 'Icons/speechIcon.svg';
import puzzleIcon from 'Icons/puzzle.svg';
import React, { useState } from 'react';


interface InfoContainerProps {
    infoContainerID: string,
    headerContainerID?: string,
    headerContainerClass?: string,
    infoHeaderID?: string,
    infoHeaderClass?: string,
    infoHeaderContent: string,
    imgID: string,
    imgSrc: string,
    imgAlt: string,
    infoListID?: string,
    listLoop?: React.ReactElement[],
    descriptionTextID?: string
    descriptionText?: string,
}

function InfoContainer(props: InfoContainerProps) {
    return (
        <div id={props.infoContainerID}>
            <div id={props.headerContainerID || undefined} className={props.headerContainerClass || undefined}>
                <img id={props.imgID} src={props.imgSrc} alt={props.imgAlt} />
                <h2 id={props.infoHeaderID || undefined} className={props.infoHeaderClass || undefined}>{props.infoHeaderContent}</h2>
            </div>
            {props.infoListID !== undefined && <ul id={props.infoListID}>{props.listLoop}</ul>}
            {props.descriptionText !== undefined && <p id={props.descriptionTextID}>{props.descriptionText}</p>}
        </div>
    );
}

interface SkillAccordionProps {
    listItemClass: string,
    listKey: string,
    listDescr: string
}

function SkillsAccordion(props: SkillAccordionProps) {
    
    const [arrowIconStatus, setArrowIconStatus] = useState("blackArrowDownDefault");
    const [descrStatus, setDescrStatus] = useState("descrContainerHidden");
    
    const handleClick = () => {
        if (arrowIconStatus === "blackArrowDownDefault") {
            setArrowIconStatus("blackArrowDownForwards");
            setDescrStatus("descrContainerVisible");
        } else if (arrowIconStatus === "blackArrowDownForwards") {
            setArrowIconStatus("blackArrowDownBackwards");
            setDescrStatus("descrContainerHidden");
        } else {
            setArrowIconStatus("blackArrowDownForwards");
            setDescrStatus("descrContainerVisible");
        }
    } 
    
    return (
        <li className={props.listItemClass} onClick={handleClick} key={props.listKey}>
            {props.listItemClass === "warningListItem" && <img className="warningSignIcon" src={warningSignIcon}/>}
            {props.listKey}
            <img className={arrowIconStatus} onClick={handleClick} src={blackArrowDownIcon} />
            <div className={descrStatus}>
                <p className="dropdownDescr">{props.listDescr}</p>
            </div>
        </li>
    );
}


function Bio() {
    
    const aboutMeStyling = {
        infoContainerID: "aboutMeInfoContainer",
        headerContainerID: "aboutMeHeaderContainer",
        infoHeaderContent: "About me",
        infoHeaderID: "aboutMeHeader",
        imgID: "contactIcon",
        imgSrc: contactIcon,
        imgAlt: "a contact icon",
        descriptionTextID: "aboutMeInfo",
        descriptionText: `A self-taught programmer with a diploma in BSc Economics, who is currently building his portfolio 
        from various front-end and Python projects`
    }

    const contactList: {[key: string]: {iconID: string; icon: IconProp, contactText: string}} = {
        "contactAddress": {iconID: "addressIcon", icon: faMapLocationDot, contactText: "81245 Berrschestrasse 7, Munich, Germany"},
        "contactEmail": {iconID: "emailIcon", icon: faEnvelope, contactText: "alexeyguljajev@gmail.com"},
        "contactPhone": {iconID: "phoneIcon", icon: faPhone, contactText: "+49 174 6541424"},
        "contactLinkedIn": {iconID: "linkedInIcon", icon: faLinkedin, contactText: "https://www.linkedin.com/in/alekszej-guljajev/"}
    };

    const contactListLoop = Object.keys(contactList).map(key => {
        let eachContact = contactList[key]
        return (
            <li key={key} id={key} className="contactInfoItem">
                <FontAwesomeIcon id={eachContact.iconID} icon={eachContact.icon} />
                {eachContact.contactText}
            </li>
        );
    });

    const contactContainerStyling = {
        infoContainerID: "contactInfoContainer",
        headerContainerID: "contactInfoHeaderContainer",
        infoHeaderContent: "Contact details",
        infoHeaderID: "contactInfoHeader",
        imgID: "contactBookIcon",
        imgSrc: contactBookIcon,
        imgAlt: "an address book icon",
        infoListID: "contactInfoList",
        listLoop: contactListLoop
    };

    const myEducation: {[key: string]: string} = {
        "School N25 in Ussuriysk, Russia": "2007 - 2012",
        "Munich International School in Munich, Germany": "2013 - 2020",
        "University of Westminster in London, UK": "2020 - 2023",
        "Self-taught programer": "2023 -"
    };

    const educationLoop = Object.keys(myEducation).map(key => {
        return <li className="educationInfoItem">{key}<span className="educationYear">{myEducation[key]}</span></li>
    });

    const educationContainerStyling = {
        infoContainerID: "educationContainer",
        headerContainerID: "educationHeaderContainer",
        infoHeaderContent: "Education",
        infoHeaderID: "educationHeader",
        imgID: "educationHatIcon",
        imgSrc: educationHatIcon,
        imgAlt: "an education hat icon",
        infoListID: "educationList",
        listLoop: educationLoop
    };

       
    const myApproaches: {[key: string]: string} = {
        "Most tasks are programmable": `Most tasks that involve computers, specifically working with data and its manipulation, 
        can be programmed. While due to API limitations or calculation complexit the solution found might not be ideal, 
        or be different to previous expectations,there will be at least a single solution for the problem. Keeping this 
        thought in mind allows me to relax and face challenges with confidence, focusing on brainstorming and testing 
        potential solutions, rather than question feasibility of faced challenge.`,

        "Experiment with available technology and tools": `Not learning or using available technology would be a missed
        opportunity, since various tools, packages and modules can singificantly optimize mundane programming tasks. Even
        using most basic well-known features provides me more knowledge and experience with that technology compared 
        to those who never used it.`,
        
        "Understand concepts on fundamental in-depth level": `While developers have access to many tools such
        as website constructors, modules and packages that abstract and simplify various programming processes, 
        it's still important to me to look for underlying concepts and patterns these tools have. Gaining more knowledge
        about fundamental concepts and processes allows me to ask more questions which lead to finding more detailed 
        answers and connecting recently acquired information with knowledge that I already have.`,
        
        "Assume all clients have no programming knowledge": `During the development of a Discord bot I was investigating 
        possible methods to enhance interaction between users and the bot. It has often led me to forums where I encountered
        hobbyists who provided very detailed instructions on how to use their bot and specific input each command expects to 
        be executed successfully. I find such approach to be confusing and repelling to the end-user. I believe that we as
        developers must simplify all user interactions with our program and anticipate all probable and improbable edge 
        cases that may occur during the interaction. We shouldn't just rely on user to behave exactly as we expect.`,

        "Start simple, then gradually add complexity when needed": `Everything in a program needs to be as simple and intutive 
        as possible. This applies to the code our applicaiton was programmed in, but it's especially crucial for 
        UI, which guides users through the application. For example using universally recognizable symbols for 
        specific buttons and functionalities would be more effective than re-inventing the wheel by re-designing those 
        symbols or creating new icons that represent them. In my opinion, the intuitiveness and simplicity of UI comes 
        from user's prevous experiences, habits and even muscle memory. If we can develop an application or UI that 
        resonates with users, there is a high chance that our application and UI have achieved their goals.`,
        
        "Ensure the code is clear and easily readable": `While many of us chase the satisfying, perfectly functioning 
        end-result, it's crucial to look back and ensure our code can be easily read and understood by others, as well as
        by our future selves. Standards for clear code might be subjective, but adding some indentation, line-breaks and 
        comments is the minimum I can do. When possible, I combine similar code into reusable functions and components or 
        split large chunk of code into separate files. I try to avoid writing long lines of code or having files that 
        exceed 300 lines of code to ensure that my code is clear and easy to navigate, at least for myself in the future`,

        "Take notes when possible": `Taking notes plays a huge role in my learning and the way I process new information.
        While I might not return to my notes immediately, writing down new information gives me additional time to 
        process and understand it better. It also helps me to refresh some long-forgotten concepts and ideas and it helps
        to avoid searching the internet for informaiton that I have already looked up. During my projects, I sometimes 
        encounter rarely mentioned information and observations, which I can then re-read when facing a similar problem 
        again.`,
    };

    const approachLoop = Object.keys(myApproaches).map(key => {
        const approachStyling = {
            listItemClass: "approachItem",
            listKey: key,
            listDescr: myApproaches[key]
        };
        
        return (
            <SkillsAccordion {...approachStyling}/>
        );
    });

    const approachContainerStyling = {
        infoContainerID: "approachContainer",
        headerContainerID: "approachHeaderContainer",
        infoHeaderContent: "Programming approach",
        infoHeaderID: "approachHeader",
        imgID: "puzzleIcon",
        imgSrc: puzzleIcon,
        imgAlt: "a puzzle icon",
        infoListID: "approachList",
        listLoop: approachLoop
    }
    
    const softSkills: {[key: string]: string} = {
        "Punctuality": "Without external delays I always come on time",
        "Communication": "I am not shy to open up and tell about my ideas when appropriate, as well as asking questions to clarify given instructions",
        "Teamwork": `Due to few of my experiences working in fast-paced environments and many group projects
         in university, I quickly picked up and improved my teamwork skills. I am not self-centered and am always ready 
         to hear out different perspectives and ideas which would lead to more efficient outcomes, as well as 
         acknowledge my and other people's strengths and weaknesses.`,
        "Patiance": `I realize that not everything is dependent on my actions and performance, yet I try to do my best
        to avoid negative consequences and bad results. Programming has taught me not to hurry, think before making decisions
        and be patient when mistakes occur.`,
        "Stress Resistance": `My work experience in fast-paced envorinments has taught me to try and be calm 
        in stressful momements, which provides an opportunity to think clearer and make better decisions.`
    };

    const softSkillsLoop = Object.keys(softSkills).map(key => {
        const styling = {
            listItemClass: "regularListItem",
            listKey: key,
            listDescr: softSkills[key]
        };
        return (
            <SkillsAccordion {...styling}/>
        );
    });

    const softSkillContainerStyling = {
        infoContainerID: "softSkillsContainer",
        headerContainerClass: "skillHeaderContainer",
        infoHeaderContent: "Soft Skills",
        infoHeaderClass: "skillHeader",
        imgID: "speechIcon",
        imgSrc: speechIcon,
        imgAlt: "a talking person icon",
        infoListID: "softSkillListFull",
        listLoop: softSkillsLoop
    }

    const technicalSkills: {[key: string]: {description: string | null; warning?: boolean }} = {
        "HTML CSS": {description: "Familiar with most common concepts"},
        "Bootstrap": {description:"I understand how it works, but for now I practice with vanilla CSS", warning: true},
        "SASS / SCSS": {description: "Prefer SCSS syntax, its basic features helped me to build this website"},
        "JavaScript + React": {description: "Used React for this website, JSX is really impressive"},
        "Vue": {description: "I understand how it works and I hope to do a project either with Vue or Svelte", warning: true},
        "Python": {description: " Programmed with it for fun, also made a discord bot. Worked a bit with Pytorch"},

        "SQL": {description: "Made a basic local SQLite DB for my discord bot. Planning to use PostgreSQL for this website", warning: true},
        "Adobe Illustrator": {description: "Used to make illustrations and practice graphic design"},
        "Figma": {description: "Recently familiarized myself with basics to make my own icons"},
        "Research / Note Taking": {description: "Crucial skills which I have improved throughout university and self-taught programming"}
    };
    
    const technicalSkillsLoop = Object.keys(technicalSkills).map(key => {
        const specificSkill =  technicalSkills[key]  
        const styling = {
            listItemClass: specificSkill.hasOwnProperty("warning") ? "warningListItem" : "regularListItem",
            listKey: key,
            listDescr: specificSkill.description as string
        }

        return (
            <SkillsAccordion {...styling}/>
        );
        
    });

    const techSkillContainerStyling = {
        infoContainerID: "techSkillsContainer",
        headerContainerClass: "skillHeaderContainer",
        infoHeaderContent: "Technical Skills",
        infoHeaderClass: "skillHeader",
        imgID: "gearIcon",
        imgSrc: gearIcon,
        imgAlt: "a gear icon",
        infoListID: "techSkillListFull",
        listLoop: technicalSkillsLoop
    }
    
    return (
        <>
        <div id="mainSection">
            <div id="aboutMeSection">
                <div id="profileContainer">
                    <div id="myPhotoContainer">
                        <img id="myPhoto" src={myPhoto} alt="My Photo" />
                    </div>
                    <h1 id="myNameHeader">Alekszej Guljajev</h1>
                </div>
                <div id="aboutMeContainer">
                    <InfoContainer {...aboutMeStyling} />
                    <InfoContainer {...contactContainerStyling} />
                    <InfoContainer {...educationContainerStyling} />
                </div>
            </div>
            
            <div id="experienceSection">
                <InfoContainer {...approachContainerStyling} />
                
                <div id="allSkillsContainer">
                    <InfoContainer {...techSkillContainerStyling} />
                    <InfoContainer {...softSkillContainerStyling} />
                </div>
            </div>  
        </div>
        </>
    );
}

export default Bio;
