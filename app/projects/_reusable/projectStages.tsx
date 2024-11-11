"use client"
import { useState } from "react";


type ProjectStagesProps = {
    stages: {stage: string, text: string}[],
    wrapperStyling: string
}

export default function ProjectStages({ stages, wrapperStyling }: ProjectStagesProps) {
    const styling = {
        progressBar: "flex flex-col justify-between w-[70px] h-[585px] bg-[hsl(0,0,95%)] rounded-full shadow-[1px_1px_10px] shadow-[#BEBEBE] relative left-10",
        progressBarColored: "w-full rounded-full shadow-[1px_1px_10px] shadow-[#BEBEBE] absolute",
        button: "w-[70px] h-[70px] rounded-full bg-[hsl(0,0,92%)] z-50",
        activeButton: "w-[70px] h-[70px] rounded-full bg-red-500 z-50"
    };

    const [stageIndex, setIndex] = useState<number>(0);

    const handleClick = (newIndex: number) => {
        if (stageIndex !== newIndex) {
            console.log("change detected")
            setIndex(newIndex);
        }
    }

    const getDynamicProgress = () => {
        if (stages.length === 3) {
            switch (stageIndex) {
                case 0:
                    return "h-full bg-transparent"
                case 1: 
                    return "h-[calc(50%+2rem)] bg-green-500"
                case 2:
                    return "h-full bg-green-500"
            }
        }

        else if (stages.length === 4) {
            switch (stageIndex) {
                case 0:
                    return "h-full bg-transparent"
                case 1: 
                    return "h-[calc(100%/3+2rem)] bg-green-500"
                case 2:
                    return "h-[calc(100%/3*2+1rem)] bg-green-500"
                case 3:
                    return "h-full bg-green-500"
            }
        }
    }

    return (
        <div className={wrapperStyling}>

            <div className={styling.progressBar}>
                {stages.map((stage, index) => (
                    <button 
                        className={index === stageIndex ? styling.activeButton : styling.button} 
                        onClick={() => handleClick(index)} />
                ))}
                <div className={`${styling.progressBarColored} ${getDynamicProgress()}`} />
            </div>

            <div>
                <h3>{stages[stageIndex].stage}</h3>
                <p>{stages[stageIndex].text}</p>
            </div>
        </div>
    );
}