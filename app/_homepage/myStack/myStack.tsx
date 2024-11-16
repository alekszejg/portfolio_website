"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import SkillLogo from "@/app/_homepage/myStack/skillLogo";
import skills from "@/app/_homepage/myStack/skills.data";
import type { SkillsType } from "@/app/_homepage/myStack/skills.data";


export default function MyStack({ hasHeader }: {hasHeader: boolean}) {
    const styling = {
        section: "py-[3rem] px-[5%]",
        header: "mb-[2rem]",
        stackWrapper: "flex gap-x-[3rem] tablet:gap-x-[1.6rem] tablet:shrink-0",
        mobileGrid: "grid grid-cols-[repeat(2,1.5rem)] gap-[1rem] w-16 h-[1px] tablet:hidden", // leave h-[1px], it overrites automatic h-full
        desktopLogosWrapper: "hidden tablet:flex tablet:flex-col tablet:items-center tablet:gap-y-[1.6rem] tablet:shrink-0",
        desktopLogoRow: "hidden tablet:flex tablet:gap-x-[1.2rem]",
        description: {
            wrapper: "tablet:w-[70%]",
            header: "mb-[0.8rem]",
            text: ""
        }
    }

    const searchParams = useSearchParams();
    const selectedSkill = searchParams.get("stack");
    
    const stackSectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log("effect was executed")
        if (selectedSkill) {
            stackSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }  
    }, []);


    const getProps = (skillName: keyof SkillsType) => {
        const { header, text, ...requiredProps } = skills[skillName];
        const combinedProps = {
            ...requiredProps, 
            ...((skillName === selectedSkill || skillName === "html" && !selectedSkill) && { isSelected: true })};
        return combinedProps;
    }
    
    return (
        <section className={styling.section}>
            
            {hasHeader && <h2 className={styling.header}>My stack</h2>}
            
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
                    <h3 className={styling.description.header}>{skills[selectedSkill as keyof SkillsType || "html"].header}</h3>
                    <p className={styling.description.text}>{skills[selectedSkill as keyof SkillsType || "html"].text}</p>
                </div>
            </div>
        </section>
    );
}