"use client"

import { useState, FormEvent, ReactNode } from "react";
import handlePostSubmit from "@/actions/handlePostSubmit";


export default function PostCreator(props: {wrapperStyling: string, selectCategory: Promise<JSX.Element | null>}) {
    const styling = {
        addPostsHeader: "flex items-end gap-x-[0.8rem] ml-[1.8rem]",
        inputLabel: "ml-[1.8rem] mb-2 mt-4",
        error: "ml-[0.3rem] text-[10px] text-[red]",
        input: "h-8 px-[0.7rem] mb-6 ml-[1.8rem] border-2 border-[hsl(0,0%,75%)] rounded-md box-border focus:border-[hsl(0,0%,65%)] focus:outline-none",
        textArea: "h-[200px] pt-2 px-[0.7rem] pb-[1.2rem] ml-[1.8rem] mb-[0.8rem] border-2 border-[hsl(0,0%,75%)] rounded-md box-border resize-none focus:border-[hsl(0,0%,65%)] focus:outline-none",
        submitButton: "flex justify-center items-center self-end w-[130px] py-2 rounded-md border-2 border-[hsl(0,0%,75%)] font-medium tracking-wide hover:scale-[1.01]",
        submittedMessage: "self-center text-[green]"
    };

    const [ status, setStatus ] = useState({titleError: "", descrError: "", submitted: false}); 
    const { titleError, descrError, submitted } = status;
    
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const { titleError, descrError, submitted } = await handlePostSubmit(new FormData(event.currentTarget as HTMLFormElement));
        setStatus({titleError: titleError, descrError: descrError, submitted: submitted});
        submitted && setTimeout(() => {window.location.reload()}, 2000);
    }

    return (
        <form className={props.wrapperStyling} onSubmit={handleSubmit}>         
            <h2 className={styling.addPostsHeader}>Add new post {props.selectCategory}</h2>
            
            <h3 className={styling.inputLabel}>
                Title
                {titleError && <span className={styling.error}>{titleError}</span>}
            </h3>

            <input className={styling.input} type="text" name="title" required />

            <h3 className={styling.inputLabel}>Description
                {descrError && <span className={styling.error}>{descrError}</span>}  
            </h3>
            
            <textarea className={styling.textArea} name="body" required/>
            
            {!submitted && <button className={styling.submitButton} type="submit">Submit</button>}
            {submitted && <p className={styling.submittedMessage}>Post has been submitted</p>}
        </form>
    );
}