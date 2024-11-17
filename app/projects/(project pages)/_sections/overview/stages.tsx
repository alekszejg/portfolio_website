"use client"
import { useState } from "react";


type StagesProps = {
    stages: {header: string, text: string}[],
    wrapperStyling: string
}

export default function Stages({ stages, wrapperStyling }: StagesProps) {
    const styling = {
        progressBar: "flex flex-col justify-between items-center w-[0.2rem] h-2/3 bg-black rounded-full",
        button: "w-5 h-5 rounded-full bg-[hsl(0,0,92%)] z-50",
        activeButton: "w-5 h-5 rounded-full bg-red-500 z-50",
        header: "font-medium tracking-wider",
        text: "text-sm"
    };

    const [stageIndex, setIndex] = useState<number>(0);

    const displayStage = (newIndex: number) => {
        if (stageIndex !== newIndex) {
            setIndex(newIndex);
        }
    }

    return (
        <div className={wrapperStyling}>

            <div className={styling.progressBar}>
                {stages.map((stage, index) => (
                    <button 
                        key={`stage${index + 1}`}
                        className={index === stageIndex ? styling.activeButton : styling.button} 
                        onClick={() => displayStage(index)} />
                ))}
            </div>

            <div>
                <h3 className={styling.header}>{stages[stageIndex].header}</h3>
                <p className={styling.text}>{stages[stageIndex].text}</p>
            </div>
        </div>
    );
}