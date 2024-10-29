"use client"

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import TechSkillLogo from "../techSkillLogo";
import myStack from "@/app/_homepage/myStack.json";


type StackType = {name: string; text: string; image: string; alt: string};
const stack: {[key: string]: StackType} = myStack;

export default function MyStack(props: {hasHeader: boolean}) {
    const styling = {
        mobileGrid: "",
        desktopGrid: "hidden"
    }

    const searchParams = useSearchParams();
    const selectedSkill = searchParams.get("skill");
    
    const stackSectionRef = useRef<HTMLDivElement>(null);
    const [hasMounted, setHasMounted] = useState(false);
    
    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (hasMounted && selectedSkill && stackSectionRef.current) {
            stackSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center',});
        }
    }, [selectedSkill, hasMounted]);

    
    
    return (
        <section id="stackSection">
            {props.hasHeader && <h2>My stack</h2>}
            <div id="stackWrapper" ref={stackSectionRef}>
                
                <div id="stackLogosWrapper">
                    
                    <div className={styling.mobileGrid}>
                        {Object.keys(myStack).map(skill => (
                            <TechSkillLogo searchParamName={skill} selectedSkill={selectedSkill} imgSrc={stack[skill].image} imgAlt={stack[skill].alt} />
                        ))}
                    </div>

                    <div className={styling.desktopGrid}>
                        <TechSkillLogo searchParamName="html" selectedSkill={selectedSkill} imgSrc={stack["html"].image} imgAlt={stack["html"].alt} />
                        <TechSkillLogo searchParamName="css" selectedSkill={selectedSkill} imgSrc={stack["css"].image} imgAlt={stack["css"].alt} />
                        <TechSkillLogo searchParamName="sass/scss" selectedSkill={selectedSkill} imgSrc={stack["sass/scss"].image} imgAlt={stack["sass/scss"].alt} />
                        <TechSkillLogo searchParamName="tailwind-css" selectedSkill={selectedSkill} imgSrc={stack["tailwind-css"].image} imgAlt={stack["tailwind-css"].alt} />
                    </div>

                    <div className={styling.desktopGrid}>
                        <TechSkillLogo searchParamName="javascript" selectedSkill={selectedSkill} imgSrc={stack["javascript"].image} imgAlt={stack["javascript"].alt} />
                        <TechSkillLogo searchParamName="typescript" selectedSkill={selectedSkill} imgSrc={stack["typescript"].image} imgAlt={stack["typescript"].alt} />
                        <TechSkillLogo searchParamName="python" selectedSkill={selectedSkill} imgSrc={stack["python"].image} imgAlt={stack["python"].alt} />
                    </div>

                    <div className={styling.desktopGrid}>
                        <TechSkillLogo searchParamName="reactjs" selectedSkill={selectedSkill} imgSrc={stack["reactjs"].image} imgAlt={stack["reactjs"].alt} />
                        <TechSkillLogo searchParamName="nextjs" selectedSkill={selectedSkill} imgSrc={stack["nextjs"].image} imgAlt={stack["nextjs"].alt} />
                    </div>
                </div>

                <div id="toolDescriptionWrapper">
                    <h3>{stack[selectedSkill as keyof StackType || "html"].name}</h3>
                    <p>{stack[selectedSkill as keyof StackType || "html"].text}</p>
                </div>
            </div>
        </section>
    );
}