import Image from 'next/image';
import PageLayout from '@/app/_layoutComponents/pageLayout';
import InfoSection from '@/app/interactive-cv/infoSection';
import AccordionItem from '@/app/interactive-cv/accordionItem';
import cvInfo from '@/app/interactive-cv/cv.info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MyCV() {
    const styling = {
        layout: "flex flex-col items-center tablet:flex-row tablet:items-stretch",
        general: {
            section: "bg-cvGeneralSection py-cvSectionYGap px-[15%]",
            myImgWrapper: "w-[clamp(180px,55%,200px)] mx-auto aspect-square",
            myImg: "w-full h-full object-cover rounded-full ",
            myName: "pt-2 text-center text-[clamp(1.2rem,5vw,1.8rem)]",
            stickyWrapper: "flex flex-col items-center gap-y-cvSectionYGap",
            aboutMe: {
                headerIcon: "clamp(1rem,5vw,1.5rem) select-none"
            }
        }
    };

    const aboutMeProps = {
        iconClass: styling.general.aboutMe.headerIcon,
        headerIconSrc: "/Icons/contactIcon.svg",
        headerClass: "generalHeader",
        header: "About me",
        descriptionClass: "aboutMeText",
        description: `A self-taught programmer with a diploma in BSc Economics, who is currently building 
        his portfolio from various front-end and Python projects`
    };

    const contactMeLoop = cvInfo.contactMe.map((info, index) => (
        <li key={`contactInfo${index + 1}`} id={info.id} className="contactInfoItem">
            <FontAwesomeIcon icon={info.icon} />
            {info.text}
        </li>
    ));

    const contactSectionProps = {
        headerClass: "generalHeader",
        header: "Contact details",
        iconClass: "contactBookIcon",
        headerIconSrc: "/Icons/contactBookIcon.svg",
        infoListID: "contactList",
        infoLoop: contactMeLoop
    };

    

    const educationLoop = Object.keys(cvInfo.education).map((key, index) => {
        return (
            <li key={`educationPlace${index + 1}`} className="educationInfoItem">
            {key}
                <span className="educationYear">{cvInfo.education[key as keyof typeof cvInfo.education]}</span>
            </li>
        );
    });

    const educationSectionProps = {
        headerClass: "generalHeader",
        header: "Education",
        iconClass: "educationHatIcon",
        headerIconSrc: "/Icons/educationHat.svg",
        infoListID: "educationList",
        infoLoop: educationLoop
    };

    
    const approachLoop = Object.keys(cvInfo.programmingApproaches).map((approach, index) => (
        <AccordionItem 
        key={`approach${index + 1}`} 
        title={approach} 
        description={cvInfo.programmingApproaches[approach as keyof typeof cvInfo.programmingApproaches]} />
    ));

    const approachSectionProps = {
        headerWrapperClass: "approachHeaderContainer",
        iconClass: "puzzleIcon",
        headerIconSrc: "/Icons/puzzle.svg",
        headerClass: "expertiseHeader",
        header: "Programming approach",
        infoListID: "approachList",
        infoLoop: approachLoop
    }

    

    const skillsLoop = (list: string[]) => {
        return list.map((skill, index) => (
            <li key={`skill${index + 1}`} className="eachSkill">{skill}</li>
        ));
    };

    const technicalSkillsProps = {
        headerWrapperClass: "skillHeaderContainer",
        iconClass: "gearIcon",
        headerIconSrc: "/Icons/gearIcon.svg",
        headerClass: "expertiseHeader",
        header: "Technical Skills",
        infoListClass: "skillList",
        infoLoop: skillsLoop(cvInfo.technicalSkills)
    };

    const softSkillsProps = {
        headerWrapperClass: "skillHeaderContainer",
        iconClass: "speechIcon",
        headerIconSrc: "/Icons/speechIcon.svg",
        headerClass: "expertiseHeader",
        header: "Soft Skills",
        infoListClass: "skillList",
        infoLoop: skillsLoop(cvInfo.softSkills)
    };
    
    
    return (
        <PageLayout className={styling.layout}>
            <section className={styling.general.section}>
                
                <div className={styling.general.myImgWrapper}>
                    <Image 
                    className={styling.general.myImg} 
                    width={1000} 
                    height={1000} 
                    src="/Images/myPhoto.png" 
                    alt="My Photo" />
                </div>
                <h1 className={styling.general.myName}>Alekszej Guljajev</h1>
                
                <div id="stickyWrapper">
                    <div id="aboutMeWrapper">
                        <InfoSection {...aboutMeProps} />
                    </div>
                    
                    <div id="contactWrapper">
                        <InfoSection {...contactSectionProps} />
                    </div>
                    
                    <div id="educationWrapper">
                        <InfoSection {...educationSectionProps} />
                    </div>
                </div>
                
            </section>
            
            <section id="expertiseSection">
                
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

            </section>  
        </PageLayout>
    );
};