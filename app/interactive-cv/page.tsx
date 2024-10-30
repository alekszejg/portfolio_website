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
            section: "bg-cvGeneralSection py-cvSectionYGap px-[15%] box-border",
            myImgWrapper: "w-[clamp(180px,55%,200px)] mx-auto aspect-square",
            myImg: "w-full h-full object-cover rounded-full ",
            myName: "pt-2 text-center text-[clamp(1.2rem,5vw,1.8rem)]",
            stickyWrapper: "flex flex-col items-center gap-y-cvSectionYGap",
            aboutMe: {
                wrapper: "w-full",
                headerIcon: "w-[clamp(1rem,5vw,1.5rem)] select-none",
                header: "pl-[0.7rem] text-center",
                text: "mt-6"
            },
            contact: {
                wrapper: "w-full",
                headerIcon: "w-[clamp(1rem,5vw,1.5rem)] select-none",
                header: "pl-[0.7rem] text-center",
                list: "mt-6",
                listItem: "flex items-center mt-6",
                icons: "w-4 mr-2 align-[-0.2rem] select-none"
            },
            education: {
                wrapper: "w-full",
                headerIcon: "w-[clamp(1rem,5vw,1.5rem)] select-none",
                header: "pl-[0.7rem] text-center",
                list: "mt-6",
                listItem: "flex items-center mt-6",
                educationYear: "inline-block ml-[0.8rem]"
            }
        },
        expertise: {
            section: "flex flex-col items-center",
            approaches: {
                wrapper: "flex flex-col items-center py-cvSectionYGap px-[15%] box-border bg-cvApproachSection",
                headerIcon: "w-[1.7rem] select-none",
                header: "pl-2 text-[1.3rem] text-center bg-cvApproachSection sticky top-0",
                list: "flex flex-col gap-y-10 box-border",
                listItem: "py-6 pl-[1.2rem] pr-12 rounded-2xl box-border text-[clamp(1.1rem,5vw,1.2rem)] relative hover:bg-cvApproachHover hover:cursor-pointer "
            },
            skills: {
                wrapper: "flex flex-col items-center gap-y-20 py-cvSectionYGap px-[15%] box-border bg-cvSkillsSection",
                gearHeaderIcon: "w-10 select-none",
                speechHeaderIcon: "w-[1.7rem] select-none",
                header: "pl-2 text-[1.3rem] text-center bg-cvSkillsSection sticky top-0",
                listWrapper: "flex flex-col items-center w-full",
                listItem: "mt-12 text-center text-clamp(1rem,5vw,1.3rem)"
            }
        }
    };

    const aboutMeProps = {
        iconClass: styling.general.aboutMe.headerIcon,
        headerIconSrc: "/Icons/contactIcon.svg",
        headerClass: styling.general.aboutMe.header,
        header: "About me",
        descriptionClass: styling.general.aboutMe.text,
        description: `A self-taught programmer with a diploma in BSc Economics, who is currently building 
        his portfolio from various front-end and Python projects`
    };

    const contactMeLoop = cvInfo.contactMe.map((info, index) => (
        <li key={`contactInfo${index + 1}`} className={styling.general.contact.listItem}>
            <FontAwesomeIcon className={styling.general.contact.icons} icon={info.icon} />
            {info.text}
        </li>
    ));

    const contactSectionProps = {
        headerClass: styling.general.contact.header,
        header: "Contact details",
        iconClass: styling.general.contact.headerIcon,
        headerIconSrc: "/Icons/contactBookIcon.svg",
        listClass: styling.general.contact.list,
        infoLoop: contactMeLoop
    };

    

    const educationLoop = Object.keys(cvInfo.education).map((place, index) => {
        return (
            <li key={`place${index + 1}`} className={styling.general.education.listItem}>
                {place}
                <span className={styling.general.education.educationYear}>
                    {cvInfo.education[place as keyof typeof cvInfo.education]}
                </span>
            </li>
        );
    });

    const educationSectionProps = {
        headerClass: styling.general.education.header,
        header: "Education",
        iconClass: styling.general.education.headerIcon,
        headerIconSrc: "/Icons/educationHat.svg",
        infoListClass: styling.general.education.list,
        infoLoop: educationLoop
    };

    
    const approachLoop = Object.keys(cvInfo.programmingApproaches).map((approach, index) => (
        <AccordionItem 
        key={`approach${index + 1}`} 
        title={approach} 
        description={cvInfo.programmingApproaches[approach as keyof typeof cvInfo.programmingApproaches]} />
    ));

    const approachSectionProps = {
        iconClass: styling.expertise.approaches.headerIcon,
        headerIconSrc: "/Icons/puzzle.svg",
        headerClass: styling.expertise.approaches.header,
        header: "Programming approach",
        infoListClass: styling.expertise.approaches.list,
        infoLoop: approachLoop
    }

    

    const skillsLoop = (list: string[]) => {
        return list.map((skill, index) => (
            <li key={`skill${index + 1}`} className={styling.expertise.skills.listItem}>
                {skill}
            </li>
        ));
    };

    const technicalSkillsProps = {
        iconClass: styling.expertise.skills.gearHeaderIcon,
        headerIconSrc: "/Icons/gearIcon.svg",
        headerClass: styling.expertise.skills.header,
        header: "Technical Skills",
        infoLoop: skillsLoop(cvInfo.technicalSkills)
    };

    const softSkillsProps = {
        iconClass: styling.expertise.skills.speechHeaderIcon,
        headerIconSrc: "/Icons/speechIcon.svg",
        headerClass: styling.expertise.skills.header,
        header: "Soft Skills",
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
                
                <div className={styling.general.stickyWrapper}>
                    <div className={styling.general.aboutMe.wrapper}>
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
            
            <section className={styling.expertise.section}>
                
                <div className={styling.expertise.approaches.wrapper}>
                    <InfoSection {...approachSectionProps} />
                </div>
                
                <div className={styling.expertise.skills.wrapper}>
                    <div className={styling.expertise.skills.listWrapper}>
                        <InfoSection {...technicalSkillsProps} />
                    </div>
                    <div className={styling.expertise.skills.listWrapper}>
                        <InfoSection {...softSkillsProps} />
                    </div>
                </div>

            </section>  
        </PageLayout>
    );
};