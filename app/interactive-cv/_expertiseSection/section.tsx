import InfoSection from "@/app/interactive-cv/_reusable/infoSection";
import Accordion from "@/app/interactive-cv/_reusable/accordion";
import cvInfo from '@/app/interactive-cv/cv.info';


export default function ExpertiseSection({ wrapperStyling }: {wrapperStyling: string}) {
    const styling = {
        section: wrapperStyling,
        approaches: {
            wrapper: "flex flex-col items-center py-cvSectionYGap px-[15%] box-border bg-cvApproachSection group tablet:w-full tablet:px-[8%] tablet:box-border tablet:hover:bg-cvApproachSectionHover",
            headerIcon: "w-[1.7rem] select-none",
            header: "pl-2 text-[1.3rem] text-center bg-cvApproachSection sticky top-0 tablet:text-[2rem] tablet:bg-none tablet:static tablet:group-hover:bg-cvApproachSectionHover",
            list: "flex flex-col gap-y-10 box-border",
        },
        skills: {
            wrapper: "flex flex-col items-center gap-y-20 py-cvSectionYGap px-[15%] box-border bg-cvSkillsSection group tablet:w-full tablet:gap-y-16 tablet:px-[8%] tablet:box-border tablet:hover:bg-cvSkillsHover cvUltrawide:flex-row cvUltrawide:justify-between cvUltrawide:items-start",
            gearHeaderIcon: "w-10 select-none tablet:w-[2.7rem]",
            speechHeaderIcon: "w-[1.7rem] select-none tablet:w-8 tablet:pt-[0.4rem]",
            header: "pl-2 text-[1.3rem] text-center bg-cvSkillsSection sticky top-0 tablet:text-[2rem] tablet:group-hover:bg-cvSkillsHover",
            listWrapper: "flex flex-col items-center w-full tablet:w-[84%] cvUltrawide:w-[45%]",
            listItem: "mt-12 text-center text-clamp(1rem,5vw,1.3rem) mt-8"
        }
    };

    const approachLoop = Object.keys(cvInfo.programmingApproaches).map((approach, index) => (
        <Accordion 
        key={`approach${index + 1}`} 
        title={approach} 
        description={cvInfo.programmingApproaches[approach as keyof typeof cvInfo.programmingApproaches]} />
    ));

    const approachSectionProps = {
        iconClass: styling.approaches.headerIcon,
        headerIconSrc: "/Icons/puzzle.svg",
        headerClass: styling.approaches.header,
        header: "Programming approach",
        infoListClass: styling.approaches.list,
        infoLoop: approachLoop
    }

    const skillsLoop = (list: string[]) => {
        return list.map((skill, index) => (
            <li key={`skill${index + 1}`} className={styling.skills.listItem}>
                {skill}
            </li>
        ));
    };

    const technicalSkillsProps = {
        iconClass: styling.skills.gearHeaderIcon,
        headerIconSrc: "/Icons/gearIcon.svg",
        headerClass: styling.skills.header,
        header: "Technical Skills",
        infoLoop: skillsLoop(cvInfo.technicalSkills)
    };

    const softSkillsProps = {
        iconClass: styling.skills.speechHeaderIcon,
        headerIconSrc: "/Icons/speechIcon.svg",
        headerClass: styling.skills.header,
        header: "Soft Skills",
        infoLoop: skillsLoop(cvInfo.softSkills)
    };

    return (
        <section className={styling.section}>
                
            <div className={styling.approaches.wrapper}>
                <InfoSection {...approachSectionProps} />
            </div>
            
            <div className={styling.skills.wrapper}>
                <div className={styling.skills.listWrapper}>
                    <InfoSection {...technicalSkillsProps} />
                </div>
                <div className={styling.skills.listWrapper}>
                    <InfoSection {...softSkillsProps} />
                </div>
            </div>

        </section> 
    );
}