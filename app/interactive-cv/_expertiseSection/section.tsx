import cvInfo from '@/app/interactive-cv/cv.info';
import Subsection from "@/app/interactive-cv/_reusable/subsection";
import SectionHeader from "@/app/interactive-cv/_reusable/sectionHeader";
import Accordion from "@/app/interactive-cv/_reusable/accordion";


export default function ExpertiseSection({ wrapperStyling }: {wrapperStyling: string}) {
    const styling = {
        section: wrapperStyling,
        lists: "flex flex-col gap-y-6 mt-4 tablet:mt-6",
        approaches: {
            section: "flex flex-col items-center py-cvSectionYGap w-full px-[15%] bg-cvApproachSection group tablet:px-[8%] tablet:hover:bg-cvApproachSectionHover",
            headerWrapper: "sticky sticky top-0 z-50 bg-cvApproachSection tablet:group-hover:bg-cvApproachSectionHover",
            headerIcon: "w-[1.7rem] select-none",
        },
        skills: {
            section: "flex flex-col items-center gap-y-20 w-full py-cvSectionYGap px-[15%] bg-cvSkillsSection group tablet:gap-y-16 tablet:px-[8%] tablet:box-border tablet:hover:bg-cvSkillsHover cvUltrawide:flex-row cvUltrawide:gap-x-10 cvUltrawide:items-start",
            contentWrapper: "flex flex-col items-center w-full",
            techSkills: {
                headerWrapper: "sticky sticky top-0 z-50 bg-cvSkillsSection tablet:h-[55px] tablet:group-hover:bg-cvSkillsHover",
                headerIcon: "w-10 select-none tablet:w-[2.7rem]"
            },
            softSkills: {
                headerWrapper: "tablet:h-[55px]",
                headerIcon: "w-[1.7rem] select-none tablet:w-8 tablet:pt-[0.4rem]"
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
        wrapperStyling: styling.skills.softSkills.headerWrapper,
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
                ))};
                </ul>
            </Subsection>
        
            <section className={styling.skills.section}>
                
                <Subsection wrapperStyling={styling.skills.contentWrapper}>
                    <SectionHeader {...techSkillsHeaderProps} />
                    <ul>
                        {genSkillsLoop(cvInfo.technicalSkills)};
                    </ul>
                </Subsection>
                
                <Subsection wrapperStyling={styling.skills.contentWrapper}>
                    <SectionHeader {...softSkillsHeaderProps} />
                    <ul className={styling.lists}>
                        {genSkillsLoop(cvInfo.softSkills)};
                    </ul>
                </Subsection>
            </section>

        </section> 
    );
}