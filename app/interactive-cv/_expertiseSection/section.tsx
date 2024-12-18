import cvInfo from '@/app/interactive-cv/cv.info';
import Subsection from "@/app/interactive-cv/_reusable/subsection";
import SectionHeader from "@/app/interactive-cv/_reusable/sectionHeader";
import Accordion from "@/app/interactive-cv/_reusable/accordion";


export default function ExpertiseSection({ wrapperStyling }: {wrapperStyling: string}) {
    const styling = {
        section: wrapperStyling,
        lists: "flex flex-col gap-y-6 w-full",
        approaches: {
            section: "flex flex-col items-center w-full px-cvPadX-mobile py-cvSectionYGap bg-cvApproachSection group cvTablet:px-cvPadX-pc cvTablet:hover:bg-cvApproachSectionHover",
            headerWrapper: "sticky sticky top-0 z-50 bg-cvApproachSection cvTablet:group-hover:bg-cvApproachSectionHover",
            headerIcon: "w-[1.7rem] select-none",
        },
        skills: {
            section: "flex flex-col items-center gap-y-20 w-full px-cvPadX-mobile py-cvSectionYGap bg-cvSkillsSection group cvTablet:gap-y-16 cvTablet:px-cvPadX-pc cvTablet:hover:bg-cvSkillsHover cvUltrawide:flex-row cvUltrawide:gap-x-10 cvUltrawide:items-start",
            contentWrapper: "flex flex-col items-center w-full",
            techSkills: {
                headerWrapper: "sticky sticky top-0 z-50 bg-cvSkillsSection cvTablet:h-[55px] cvTablet:group-hover:bg-cvSkillsHover",
                headerIcon: "w-8 select-none"
            },
            softSkills: {
                headerIcon: "w-[1.7rem] relative top-0.5 select-none cvTablet:w-8 cvTablet:pt-[0.4rem]"
            },
            listItem: "text-center text-clamp(1rem,5vw,1.3rem)"
        }
    };

   
    const genSkillsLoop = (list: string[]) => {
        return list.map((skill, index) => (
            <li key={`skill${index + 1}`} className={styling.skills.listItem}>
                {skill}
            </li>
        ));
    }

    const approachHeaderProps = {
        wrapperStyling: styling.approaches.headerWrapper, 
        icon: {src: "/Icons/puzzle.svg", styling: styling.approaches.headerIcon,},
        header: "Programming approach" 
    };

    const techSkillsHeaderProps = {
        wrapperStyling: styling.skills.techSkills.headerWrapper,
        icon: {src: "/Icons/gearIcon.svg", styling: styling.skills.techSkills.headerIcon},
        header: "Technical Skills"
    };

    const softSkillsHeaderProps = {
        wrapperStyling: "cvTablet:h-[55px]",
        icon: {src: "/Icons/speechIcon.svg", styling: styling.skills.softSkills.headerIcon},
        header: "Soft Skills"
    }
    
    return (
        <section className={styling.section}>
            
            <Subsection wrapperStyling={styling.approaches.section}>
                <SectionHeader {...approachHeaderProps} />
                <ul className={styling.lists}>
                    {Object.keys(cvInfo.approaches).map((approach, index) => (
                        <Accordion 
                        key={`approach${index + 1}`} 
                        title={approach} 
                        description={cvInfo.approaches[approach as keyof typeof cvInfo.approaches]} />
                    ))}
                </ul>
            </Subsection>
        
            <section className={styling.skills.section}>
                
                <Subsection wrapperStyling={styling.skills.contentWrapper}>
                    <SectionHeader {...techSkillsHeaderProps} />
                    <ul className={styling.lists}>
                        {genSkillsLoop(cvInfo.technicalSkills)}
                    </ul>
                </Subsection>
                
                <Subsection wrapperStyling={styling.skills.contentWrapper}>
                    <SectionHeader {...softSkillsHeaderProps} />
                    <ul className={styling.lists}>
                        {genSkillsLoop(cvInfo.softSkills)}
                    </ul>
                </Subsection>
            </section>

        </section> 
    );
}