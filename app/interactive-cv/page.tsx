import PageLayout from '@/app/_layoutComponents/pageLayout';
import AboutMeSection from '@/app/interactive-cv/aboutMeSection';
import InfoSection from '@/app/interactive-cv/infoSection';
import AccordionItem from '@/app/interactive-cv/accordionItem';
import '@/Styling/Pages/myCV.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

export default function MyCV() {

    const aboutMeProps = {
        headerIconID: "contactIcon",
        headerIconSrc: "/Icons/contactIcon.svg",
        headerClass: "generalHeader",
        header: "About me",
        descriptionClass: "aboutMeText",
        description: `A self-taught programmer with a diploma in BSc Economics, who is currently building his portfolio 
        from various front-end and Python projects`
    }

    const contactList = [
        {id: "contactEmail", iconID: "emailIcon", icon: faEnvelope, text: "alexeyguljajev@gmail.com"},
        {id: "contactPhone", iconID: "phoneIcon", icon: faPhone, text: "+49 174 6541424"},
    ];

    const contactListLoop = contactList.map((info, index) => (
        <li key={`contactInfo${index + 1}`} id={info.id} className="contactInfoItem">
            <FontAwesomeIcon id={info.iconID} icon={info.icon} />
            {info.text}
        </li>
    ));

    const contactSectionProps = {
        headerClass: "generalHeader",
        header: "Contact details",
        headerIconID: "contactBookIcon",
        headerIconSrc: "/Icons/contactBookIcon.svg",
        infoListID: "contactList",
        infoLoop: contactListLoop
    };

    const myEducation: {[key: string]: string} = {
        "School N25 in Ussuriysk, Russia": "2007 - 2012",
        "Munich International School in Munich, Germany": "2013 - 2020",
        "University of Westminster in London, UK": "2020 - 2023",
        "Self-taught programer": "2023 -"
    };

    const educationLoop = Object.keys(myEducation).map((key, index) => {
        return (
            <li key={`educationPlace${index + 1}`} className="educationInfoItem">
            {key}
                <span className="educationYear">{myEducation[key]}</span>
            </li>
        );
    });

    const educationSectionProps = {
        headerClass: "generalHeader",
        header: "Education",
        headerIconID: "educationHatIcon",
        headerIconSrc: "/Icons/educationHat.svg",
        infoListID: "educationList",
        infoLoop: educationLoop
    };

    const approaches: {[key: string]: string} = {
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
    
    const approachLoop = Object.keys(approaches).map((approach, index) => (
        <AccordionItem key={`${approach}${index + 1}`} title={approach} description={approaches[approach]} />
    ));

    const approachSectionProps = {
        headerWrapperClass: "approachHeaderContainer",
        headerIconID: "puzzleIcon",
        headerIconSrc: "/Icons/puzzle.svg",
        headerClass: "expertiseHeader",
        header: "Programming approach",
        infoListID: "approachList",
        infoLoop: approachLoop
    }

    const technicalSkills = ["HTML CSS", "SASS / SCSS", "Tailwind CSS", "JavaScript & TypeScript", "React (& migration to Next.js 14)", "Python", "Adobe Illustrator", "Figma", "Research"];
    const softSkills = ["Punctuality", "Communication", "Ready to help", "Patience"]

    const skillsLoop = (list: string[]) => {
        return list.map((skill, index) => (
            <li key={`skill${index + 1}`} className="eachSkill">{skill}</li>
        ));
    };

    const technicalSkillsProps = {
        headerWrapperClass: "skillHeaderContainer",
        headerIconID: "gearIcon",
        headerIconSrc: "/Icons/gearIcon.svg",
        headerClass: "expertiseHeader",
        header: "Technical Skills",
        infoListClass: "skillList",
        infoLoop: skillsLoop(technicalSkills)
    };

    const softSkillsProps = {
        headerWrapperClass: "skillHeaderContainer",
        headerIconID: "speechIcon",
        headerIconSrc: "/Icons/speechIcon.svg",
        headerClass: "expertiseHeader",
        header: "Soft Skills",
        infoListClass: "skillList",
        infoLoop: skillsLoop(softSkills)
    };
    
    
    return (
        <PageLayout layoutID="myCVLayout">
            <div id="generalSection">
                <div id="cvProfileWrapper">
                    <div id="myPhotoWrapper">
                        <img id="myPhoto" src="/Images/myPhoto.png" alt="My Photo" />
                    </div>
                    <h1 id="name">Alekszej Guljajev</h1>
                </div>
                
                <div id="stickyWrapper">
                    <div id="aboutMeWrapper">
                        <AboutMeSection {...aboutMeProps} />
                    </div>
                    
                    <div id="contactWrapper">
                        <InfoSection {...contactSectionProps} />
                    </div>
                    
                    <div id="educationWrapper">
                        <InfoSection {...educationSectionProps} />
                    </div>
                </div>
                
            </div>
            
            <div id="expertiseSection">
                
                <div id="approachesWrapper">
                    <InfoSection {...approachSectionProps} />
                </div>
                
                <div id="skillsWrapper">
                    <div className="skillListWrapper">
                        <InfoSection {...technicalSkillsProps} />
                    </div>
                    <div className="skillListWrapper">
                        <InfoSection {...softSkillsProps} />
                    </div>
                </div>

            </div>  
        </PageLayout>
    );
};