"use client"

import { useState, FormEvent } from "react";
import type { CategoryData } from "@/actions/blog/getPostCategories";
import handlePostSubmit from "@/actions/blog/handlePostSubmit";


export default function PostCreator({ postCategories } : {postCategories: CategoryData[] | null}) {
    
    const [ status, setStatus ] = useState({titleError: "", descrError: "", submitted: false}); 
    const { titleError, descrError, submitted } = status;
    
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const { titleError, descrError, submitted } = await handlePostSubmit(new FormData(event.currentTarget as HTMLFormElement));
        setStatus({titleError: titleError, descrError: descrError, submitted: submitted});
        submitted && setTimeout(() => {window.location.reload()}, 2000);
    }

    return (
        <form id="createPosts" onSubmit={handleSubmit}>         
        
        <h2>Add new post 
            {postCategories && 
            <select name="category"><option value={undefined} />
                {postCategories.map(category => (
                <option key={category.id} value={category.id}>{category.category}</option>
                ))}
            </select>}
        </h2>
        
        <h3>Title {titleError && <span>{titleError}</span>}</h3>
        <input type="text" name="title" required />

        <h3 id="title">Description
            {descrError && <span>{descrError}</span>}  
        </h3>
        
        <textarea name="body" required/>
        
        {!submitted && <button type="submit">Submit</button>}
        {submitted && <p id="submittedText">Post has been submitted</p>}
    </form>
    );
}