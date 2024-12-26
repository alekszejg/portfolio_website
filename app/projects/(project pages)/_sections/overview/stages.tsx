"use client"
import { useState } from "react";


type StagesProps = {
    stages: {header: string, text: string}[],
    wrapperStyling: string
}

export default function Stages({ stages, wrapperStyling }: StagesProps) {
    const styling = {
        progressBar: "hidden tablet:flex tablet:flex-col tablet:justify-between tablet:items-center tablet:w-[0.2rem] tablet:h-2/3 tablet:bg-black tablet:rounded-full",
        button: "tablet:w-5 tablet:h-5 tablet:rounded-full tablet:bg-[hsl(0,0,92%)] tablet:z-50",
        activeButton: "tablet:w-5 tablet:h-5 tablet:rounded-full tablet:bg-red-500 tablet:z-50",
        mobileStages: {
            mainWrapper: "flex flex-col gap-y-3.5 tablet:hidden",
            wrappers: "",
            headers: "font-medium tracking-wider",
            texts: "text-sm"
        },
        selectedStage: {
            wrapper: "hidden tablet:block",
            header: "font-medium tracking-wider",
            text: "text-sm"
        }
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

            <div className={styling.selectedStage.wrapper}>
                <h3 className={styling.selectedStage.header}>{stages[stageIndex].header}</h3>
                <p className={styling.selectedStage.text}>{stages[stageIndex].text}</p>
            </div>

            <div className={styling.mobileStages.mainWrapper}>
                {stages.map((stage, index) => (
                    <div key={`stage${index + 1}`} className={styling.mobileStages.wrappers}>
                        <h3 className={styling.mobileStages.headers}>{stage.header}</h3>
                        <p className={styling.mobileStages.texts}>{stage.text}</p>
                    </div>
                ))}
            </div>
        
        </div>
    );
}