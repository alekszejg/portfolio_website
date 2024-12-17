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
        name: "mt-2 font-bold tracking-wider text-center text-2xl", 
        stickyWrapper: {
            wrapper: "flex flex-col items-center gap-y-cvSectionYGap pt-cvSectionYGap tablet:w-4/5 tablet:mx-auto tablet:sticky tablet:top-0",
            contentWrappers: "w-full",
            aboutMeText: "w-5/6 mt-4 mx-auto text-sm tablet:mt-6",
            sectionHeaders: {
                wrapper: "flex justify-center items-center w-full pb-2 border-b-2 border-black",
                icons: "w-[clamp(1rem,5vw,1.5rem)] select-none"
            },
            lists: "flex flex-col gap-y-6 mt-4 tablet:mt-6",
            contactListItem: "flex items-center w-5/6 text-left",
            contactListIcons: "w-4 mr-2 align-[-0.2rem] select-none",
            education: {
                listItem: "flex flex-col items-center",
                place: "w-4/5 text-left font-medium",
                location: "w-4/5 text-left text-sm",
                year: "text-sm font-regular-italic"
            }
        } 
    };

    // styling is same, only iconSrc and header text differ
    const genHeaderProps = (iconSrc: string, header: string) => {
        const headerStyling = styling.stickyWrapper.sectionHeaders;
        return {
            icon: {src: iconSrc, styling: headerStyling.icons},
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
                
                <Subsection wrapperStyling={styling.stickyWrapper.contentWrappers}>
                    <SectionHeader {...genHeaderProps("/Icons/contactIcon.svg", "About me")} />
                    <p className={styling.stickyWrapper.aboutMeText}>{cvInfo.aboutMe}</p>
                </Subsection>
                
                <Subsection wrapperStyling={styling.stickyWrapper.contentWrappers}>
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

                <Subsection wrapperStyling={styling.stickyWrapper.contentWrappers}>
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

