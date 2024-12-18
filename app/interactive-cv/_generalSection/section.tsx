import Image from "next/image";
import cvInfo from "@/app/interactive-cv/cv.info";
import Subsection from "@/app/interactive-cv/_reusable/subsection";
import SectionHeader from "@/app/interactive-cv/_reusable/sectionHeader";


export default function GeneralInfoSection({ wrapperStyling }: {wrapperStyling: string}) {
    const styling = {
        section: wrapperStyling,
        image: {
            wrapper: "w-[clamp(180px,55%,200px)] mx-auto aspect-square",
            img: "w-full h-full object-cover rounded-full"
        },
        name: "mt-3 font-bold tracking-wider text-center text-2xl", 
        contentWrappers: "w-full",
        stickyWrapper: {
            wrapper: "flex flex-col items-center gap-y-cvSectionYGap pt-cvSectionYGap tablet:sticky tablet:top-0",
            aboutMeText: "text-sm",
            headerIcons: "w-6 flex-none select-none",
            lists: "flex flex-col gap-y-6",
            contactListItem: "flex items-center",
            education: {
                listItem: "flex flex-col text-sm",
                place: "font-medium",
                location: "text-sm",
                year: "text-sm font-regular-italic"
            }
        } 
    };

    // styling is same, only iconSrc and header text differ
    const genHeaderProps = (iconSrc: string, header: string) => {
        return {
            icon: {src: iconSrc, styling: styling.stickyWrapper.headerIcons},
            header: header
        };
    };
    
    return (
        <section className={styling.section}>
                
            <div className={styling.image.wrapper}>
                <Image 
                className={styling.image.img} 
                width={350} 
                height={350} 
                src="/Images/myPhoto.png" 
                alt="My Photo" 
                priority />
            </div>
            <h1 className={styling.name}>Alekszej Guljajev</h1>
            
            <div className={styling.stickyWrapper.wrapper}>
                
                <Subsection wrapperStyling={styling.contentWrappers}>
                    <SectionHeader {...genHeaderProps("/Icons/contactIcon.svg", "About me")} />
                    <p className={styling.stickyWrapper.aboutMeText}>{cvInfo.aboutMe}</p>
                </Subsection>
                
                <Subsection wrapperStyling={styling.contentWrappers}>
                    <SectionHeader {...genHeaderProps("/Icons/contactBookIcon.svg", "Contact details")} />
                    <ul className={styling.stickyWrapper.lists}>
                        {cvInfo.contact.map((info, index) => (
                        <li key={`contactInfo${index + 1}`} className={styling.stickyWrapper.contactListItem}>
                            {info.icon}
                            {info.text}
                        </li>
                        ))}
                    </ul>
                </Subsection> 

                <Subsection wrapperStyling={styling.contentWrappers}>
                    <SectionHeader {...genHeaderProps("/Icons/educationHat.svg", "Education")} />
                    <ul className={styling.stickyWrapper.lists}>
                        {cvInfo.education.map((place, index) => (    
                        <li key={`place${index + 1}`} className={styling.stickyWrapper.education.listItem}>
                            <p className={styling.stickyWrapper.education.place}>{place.name}</p>
                            <p className={styling.stickyWrapper.education.location}>
                                {place.location}
                                <span className={styling.stickyWrapper.education.year}>{place.year}</span>
                            </p>
                        </li>
                        ))}
                    </ul>
                </Subsection>

            </div>
            
        </section>
    );
}

