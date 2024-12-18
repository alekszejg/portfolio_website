"use client"
import { useSearchParams } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import SkillLogo from "@/app/_homepage/myStack/skillLogo";
import skills from "@/app/_homepage/myStack/skills.data";
import type { SkillsType } from "@/app/_homepage/myStack/skills.data";


export default function MyStack() {
    const styling = {
        section: "w-full px-homepageXPad py-homepageYPad", 
        header: "hidden font-medium text-2xl tracking-wide tablet:block tablet:mb-5",
        stackWrapper: "flex gap-x-[3rem] tablet:gap-x-[1.6rem] tablet:shrink-0",
        mobileGrid: "grid grid-cols-[repeat(2,1.5rem)] gap-[1rem] w-16 h-[1px] tablet:hidden", // leave h-[1px], it overrites automatic h-full
        desktopLogosWrapper: "hidden tablet:flex tablet:flex-col tablet:items-center tablet:gap-y-[1.6rem] tablet:shrink-0",
        desktopLogoRow: "hidden tablet:flex tablet:gap-x-[1.2rem]",
        description: {
            wrapper: "tablet:w-[70%]",
            header: "mb-[0.8rem] font-medium text-xl tracking-wide",
            text: ""
        }
    }

    const searchParams = useSearchParams();
    const selectedSkill = searchParams.get("skill");
    const currentSkill = selectedSkill && skills.hasOwnProperty(selectedSkill) ? selectedSkill : "html";
    
    const stackSectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (currentSkill) {
            stackSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }  
    }, [currentSkill]);


    const getProps = (skillName: keyof SkillsType) => {
        const { header, text, ...requiredProps } = skills[skillName];
        const combinedProps = {
            ...requiredProps, 
            ...((skillName === currentSkill || skillName === "html" && !currentSkill) && { isSelected: true })};
        return combinedProps;
    }
    
    return (
        <section className={styling.section}>
            
            <h2 className={styling.header}>MY STACK</h2>
            
            <div className={styling.stackWrapper} ref={stackSectionRef}>
                        
                <div className={styling.mobileGrid}>
                    {Object.keys(skills).map((skill, index) => (
                        <SkillLogo key={`skill${index + 1}`} {...getProps(skill)} />
                    ))}
                </div>

                <div className={styling.desktopLogosWrapper}>
                    <div className={styling.desktopLogoRow}>
                        <SkillLogo {...getProps("html")} />
                        <SkillLogo {...getProps("css")} />
                        <SkillLogo {...getProps("sass/scss")} />
                        <SkillLogo {...getProps("tailwind")} />
                    </div>

                    <div className={styling.desktopLogoRow}>
                        <SkillLogo {...getProps("javascript")} />
                        <SkillLogo {...getProps("typescript")} />
                        <SkillLogo {...getProps("python")} />
                    </div>

                    <div className={styling.desktopLogoRow}>
                        <SkillLogo {...getProps("reactjs")} />
                        <SkillLogo {...getProps("nextjs")} />
                    </div>
                </div>  
               

                <div className={styling.description.wrapper}>
                    <h3 className={styling.description.header}>{skills[currentSkill].header}</h3>
                    <p className={styling.description.text}>{skills[currentSkill].text}</p>
                </div>
            </div>
        </section>
    );
}