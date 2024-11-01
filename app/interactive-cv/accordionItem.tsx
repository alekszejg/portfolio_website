"use client"
import Image from "next/image";
import { useState } from "react";

export default function AccordionItem({ title, description }: {title: string; description: string}) {    
    const [arrowIcon, setArrowIcon] = useState<"default" | "rotateForward" | "rotateBackwards">("default");
    const [descriptionVisible, setVisibility] = useState(false);
    
    const handleClick = () => {
        if (arrowIcon === "default" || arrowIcon === "rotateBackwards") {
            setArrowIcon("rotateForward");
            setVisibility(true);
        } 
        setArrowIcon("rotateBackwards");
        setVisibility(false);
    }

    const styling = {
        arrowIcon: arrowIcon === "default" ? "w-4 h-4 absolute right-7 translate-y-[-50%] select-none" : arrowIcon === "rotateForward" ? "w-4 h-4 absolute right-7 select-none animate-rotateForwards" : "w-4 h-4 absolute right-7 select-none animate-rotateBack",
        description: {
            wrapper: descriptionVisible ? "w-full pl-0.9rem mt-4 ml-4 border-l-1 border-black box-border" : "hidden",
            text: "text-clamp(0.95rem,5vw,1.05rem)"
        }
    }
    
    return (
        <li className="approachItem" onClick={handleClick}>
            {title}
            <Image 
            className={styling.arrowIcon} 
            width={100}
            height={100}
            src="/Icons/blackArrowDown.svg"
            alt="open or hide dropdown"
            onClick={handleClick} />
            
            <div className={styling.description.wrapper}>
                <p className={styling.description.text}>{description}</p>
            </div>
        </li>
    );
}