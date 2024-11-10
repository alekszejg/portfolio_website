"use client"
import { useState } from "react";

export default function ProjectStages({stages}: {stages: {stage: string, text: string}[]}) {
    const styling = {
        progressBar: "flex flex-col justify-between w-[70px] h-[585px] bg-[hsl(0,0,95%)] rounded-full shadow-[1px_1px_10px] shadow-[#BEBEBE] relative left-10",
        button: "w-[70px] h-[70px] rounded-full bg-[hsl(0,0,92%)]"
    };

    const [index, setIndex] = useState<number>(0);

    const handleClick = (newIndex: number) => {
        if (newIndex !== index) {
            setIndex(index);
        }
    }

    return (
        <>
        <div className={styling.progressBar}>
            {stages.map((stage, index) => (
                <button className={styling.button} onClick={() => handleClick(index)}/>
            ))}
        </div>
        <div>
            <h3>{stages[index].stage}</h3>
            <p>{stages[index].text}</p>
        </div>
        </>
    );
}