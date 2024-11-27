import Image from "next/image";
import InfoSection from "@/app/interactive-cv/_reusable/infoSection";
import cvInfo from "@/app/interactive-cv/cv.info";
import { Phone, Mail } from 'lucide-react';


export default function GeneralInfoSection({ wrapperStyling }: {wrapperStyling: string}) {
    const styling = {
        section: wrapperStyling,
        stickyWrapper: "flex flex-col items-center gap-y-cvSectionYGap tablet:w-[80%] tablet:pt-cvSectionYGap tablet:mx-auto tablet:sticky tablet:top-0",
        profile: {
            imgWrapper: "w-[clamp(180px,55%,200px)] mx-auto aspect-square",
            img: "w-full h-full object-cover rounded-full",
            name: "mt-2 font-bold tracking-wider text-center text-2xl" 
        },
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
    };

    const aboutMeProps = {
        wrapperStyling: styling.aboutMe.wrapper,
        iconClass: styling.aboutMe.headerIcon,
        headerIconSrc: "/Icons/contactIcon.svg",
        headerClass: styling.aboutMe.header,
        header: "About me",
        descriptionClass: styling.aboutMe.text,
        description: `A self-taught programmer with a diploma in BSc Economics, who is currently building 
        his portfolio from various front-end and Python projects`
    };

    const contactInfo = [
        {icon: <Phone className={styling.contact.icons}/>, text: "alexeyguljajev@gmail.com"},
        {icon: <Mail className={styling.contact.icons} />, text: "+49 174 6541424"}
    ];

    const contactMeLoop = contactInfo.map((info, index) => (
        <li key={`contactInfo${index + 1}`} className={styling.contact.listItem}>
            {info.icon}
            {info.text}
        </li>
    ));

    const contactSectionProps = {
        wrapperStyling: styling.contact.wrapper,
        headerClass: styling.contact.header,
        header: "Contact details",
        iconClass: styling.contact.headerIcon,
        headerIconSrc: "/Icons/contactBookIcon.svg",
        listClass: styling.contact.list,
        infoLoop: contactMeLoop
    };

    const educationLoop = Object.keys(cvInfo.education).map((place, index) => {
        return (
            <li key={`place${index + 1}`} className={styling.education.listItem}>
                {place}
                <span className={styling.education.educationYear}>
                    {cvInfo.education[place as keyof typeof cvInfo.education]}
                </span>
            </li>
        );
    });

    const educationSectionProps = {
        wrapperStyling: styling.education.wrapper,
        headerClass: styling.education.header,
        header: "Education",
        iconClass: styling.education.headerIcon,
        headerIconSrc: "/Icons/educationHat.svg",
        infoListClass: styling.education.list,
        infoLoop: educationLoop
    };

    return (
        <section className={styling.section}>
                
            <div className={styling.profile.imgWrapper}>
                <Image 
                className={styling.profile.img} 
                width={1000} 
                height={1000} 
                src="/Images/myPhoto.png" 
                alt="My Photo" />
            </div>
            <h1 className={styling.profile.name}>Alekszej Guljajev</h1>
            
            <div className={styling.stickyWrapper}>
                <InfoSection {...aboutMeProps} />
                <InfoSection {...contactSectionProps} />
                <InfoSection {...educationSectionProps} />
            </div>
            
        </section>
    );
}