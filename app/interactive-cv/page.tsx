import Image from 'next/image';
import PageLayout from '@/app/_layoutComponents/pageLayout';

import ExpertiseSection from '@/app/interactive-cv/_expertiseSection/section';

import InfoSection from '@/app/interactive-cv/_reusable/infoSection';
import AccordionItem from '@/app/interactive-cv/_reusable/accordion';
import cvInfo from '@/app/interactive-cv/cv.info';
import { Phone, Mail } from 'lucide-react';
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Interactive CV - Alexey Guljajev",
    description: `Click to view interactive online version of my CV! I'm a self-taught 
    programmer with a diploma in BSc Economics, who is currently building his portfolio...`
};

export default function InteractiveCVPage() {
    const styling = {
        layout: "flex flex-col items-center tablet:flex-row tablet:items-stretch",
        general: {
            section: "bg-cvGeneralSection py-cvSectionYGap px-[15%] box-border tablet:w-[42%] tablet:px-0 tablet:hover:bg-cvGeneralHover",
            myImgWrapper: "w-[clamp(180px,55%,200px)] mx-auto aspect-square",
            myImg: "w-full h-full object-cover rounded-full ",
            myName: "pt-2 text-center text-[clamp(1.2rem,5vw,1.8rem)]",
            stickyWrapper: "flex flex-col items-center gap-y-cvSectionYGap tablet:w-[80%] tablet:pt-cvSectionYGap tablet:mx-auto tablet:sticky tablet:top-0",
            aboutMe: {
                wrapper: "w-full",
                headerIcon: "w-[clamp(1rem,5vw,1.5rem)] select-none",
                header: "pl-[0.7rem] text-center tablet:text-[1.5rem]",
                text: "mt-6"
            },
            contact: {
                wrapper: "w-full",
                headerIcon: "w-[clamp(1rem,5vw,1.5rem)] select-none",
                header: "pl-[0.7rem] text-center tablet:text-[1.5rem]",
                list: "mt-6",
                listItem: "flex items-center mt-6",
                icons: "w-4 mr-2 align-[-0.2rem] select-none"
            },
            education: {
                wrapper: "w-full",
                headerIcon: "w-[clamp(1rem,5vw,1.5rem)] select-none",
                header: "pl-[0.7rem] text-center tablet:text-[1.5rem]",
                list: "mt-6",
                listItem: "flex items-center mt-6",
                educationYear: "inline-block ml-[0.8rem]"
            }
        },
        expertiseSection: "flex flex-col items-center tablet:w-[58%]",
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

    const contactInfo = [
        {icon: <Phone className={styling.general.contact.icons}/>, text: "alexeyguljajev@gmail.com"},
        {icon: <Mail className={styling.general.contact.icons} />, text: "+49 174 6541424"}
    ];

    const contactMeLoop = contactInfo.map((info, index) => (
        <li key={`contactInfo${index + 1}`} className={styling.general.contact.listItem}>
            {info.icon}
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

            <ExpertiseSection wrapperStyling={styling.expertiseSection} />

        </PageLayout>
    );
};