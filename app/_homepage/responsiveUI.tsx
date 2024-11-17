"use client"
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import MyStack from "@/app/_homepage/myStack/myStack";


type ResponsiveUIProps = {
    ProjectsSection: ReactNode,
    ShowRecentPosts: ReactNode
}


export default function ResponsiveUI({ ProjectsSection, ShowRecentPosts }: ResponsiveUIProps) {
    const styling = {
        buttonsWrapper: "flex justify-around w-4/5 mt-[1.5rem] mx-auto tablet:hidden",
        regularButton: "w-1/3 py-[0.5rem] active:bg-[rgb(225,225,225)]",
        clickedButton: "w-1/3 py-[0.5rem] active:bg-[rgb(225,225,225)] border-b-2 border-[hsla(0,0%,75%,1)"
    }

    type Section = "Stack" | "Projects" | "Posts" | "DesktopUI";

    const [section, setSection] = useState<Section>("DesktopUI");
    

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 480px)");
        
        const handleResize = () => {
            if (!mediaQuery.matches) {
                setSection("DesktopUI");
            } else {
                setSection("Stack");
            }
        };

        handleResize();

        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);


    const handleMobileClick = (newSection: Section) => {
        newSection !== section && setSection(newSection)
    }
    
    return ( 
        <div>
            
            <div className={styling.buttonsWrapper}>
                <button className={section === "Stack" ? styling.clickedButton : styling.regularButton} onClick={() => handleMobileClick("Stack")}>Stack</button>
                <button className={section === "Projects" ? styling.clickedButton : styling.regularButton} onClick={() => handleMobileClick("Projects")}>Projects</button>
                <button className={section === "Posts" ? styling.clickedButton : styling.regularButton} onClick={() => handleMobileClick("Posts")}>Posts</button>
            </div>

            {(section === "Stack" || section === "DesktopUI") && <MyStack />}

            {(section === "Projects" || section === "DesktopUI") && ProjectsSection}
                
            {(section === "Posts" || section === "DesktopUI") && ShowRecentPosts}
        
        </div>
    );
}