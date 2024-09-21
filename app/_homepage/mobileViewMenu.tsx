"use client"
import { useState, ReactNode } from "react"


type ViewOptions = "Stack" | "Projects" | "Posts";

export default function MobileViewMenu(props: {MyStack: ReactNode, MyProjects: ReactNode, RecentPosts: ReactNode}) {
    const [currentlyDisplayed, setCurrentlyDisplayed] = useState<ViewOptions>("Stack");
    
    const handleClick = (displaySection: ViewOptions) => {
        displaySection !== currentlyDisplayed && setCurrentlyDisplayed(displaySection)
    }
    
    return ( 
        <>
        <div id="mobileViewOptions">
            <button id={currentlyDisplayed === "Stack" ? "clickedButton" : undefined} onClick={() => handleClick("Stack")}>Stack</button>
            <button id={currentlyDisplayed === "Projects" ? "clickedButton" : undefined} onClick={() => handleClick("Projects")}>Projects</button>
            <button id={currentlyDisplayed === "Posts" ? "clickedButton" : undefined} onClick={() => handleClick("Posts")}>Posts</button>
        </div>

        <div id="mobileSectionWrapper">
            {currentlyDisplayed === "Stack" && props.MyStack}
            {currentlyDisplayed === "Projects" && props.MyProjects}
            {currentlyDisplayed === "Posts" && props.RecentPosts}
        </div>
        </>
    );
}