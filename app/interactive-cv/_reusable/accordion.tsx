"use client"
import Image from "next/image";
import { useState } from "react";

export default function Accordion({ title, description }: {title: string; description: string}) {    
    const [arrowIcon, setArrowIcon] = useState<"default" | "rotateForwards" | "rotateBackwards">("default");
    const [descriptionVisible, setVisibility] = useState(false);
    
    const handleClick = () => {
        if (arrowIcon === "default" || arrowIcon === "rotateBackwards") {
            setArrowIcon("rotateForwards");
            setVisibility(true);
        } else {
            setArrowIcon("rotateBackwards");
            setVisibility(false);
        }
    }

    const styling = {
        listItem: "py-3 pl-[1.2rem] pr-12 rounded-2xl box-border text-sm bg-cvApproachItem relative shadow-[0_0_0.15rem_grey] hover:bg-cvApproachItemHover hover:cursor-pointer tablet:pr-20",
        arrowIcon: arrowIcon === "default" ? "w-4 h-4 translate-y-[-50%] absolute right-4 top-6 select-none" : arrowIcon === "rotateForwards" ? "w-4 h-4 select-none translate-y-[-50%] absolute right-4 top-4 animate-rotateForwards" : "w-4 h-4 absolute translate-y-[-50%] right-4 top-4 select-none animate-rotateBackwards",
        description: {
            wrapper: descriptionVisible ? "w-full pl-0.9rem mt-4 pl-4 border-l-2 border-black box-border" : "hidden",
            text: "text-clamp(0.95rem,5vw,1.05rem)"
        }
    }
    
    return (
        <li className={styling.listItem} onClick={handleClick}>
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