"use client"
import { useState, ReactNode } from "react"


type Section = "Stack" | "Projects" | "Posts";

export default function MobileUI(props: {wrapperStyling: string, MyStack: ReactNode, MyProjects: ReactNode, RecentPosts: ReactNode}) {
    const styling = {
        buttonsWrapper: "flex justify-around w-4/5 mt-[1.5rem] mx-auto",
        regularButton: "w-1/3 py-[0.5rem] active:bg-[rgb(225,225,225)]",
        clickedButton: "w-1/3 py-[0.5rem] active:bg-[rgb(225,225,225)] border-b-2 border-[hsla(0,0%,75%,1)"
    }

    const [section, setSection] = useState<Section>("Stack");
    
    const handleClick = (newSection: Section) => {
        newSection !== section && setSection(newSection)
    }
    
    return ( 
        <>
        <div className={styling.buttonsWrapper}>
            <button className={section === "Stack" ? styling.clickedButton : styling.regularButton} onClick={() => handleClick("Stack")}>Stack</button>
            <button className={section === "Projects" ? styling.clickedButton : styling.regularButton} onClick={() => handleClick("Projects")}>Projects</button>
            <button className={section === "Posts" ? styling.clickedButton : styling.regularButton} onClick={() => handleClick("Posts")}>Posts</button>
        </div>

        <div className={props.wrapperStyling}>
            {section === "Stack" && props.MyStack}
            {section === "Projects" && props.MyProjects}
            {section === "Posts" && props.RecentPosts}
        </div>
        </>
    );
}