"use server"

import sanitizeInput from "@/actions/sanitizeInput";

export default async function handlePostSubmit(formData: FormData) {
    
    const errors = {titleError: "", descriptionError: ""};

    const rawTitle = formData.get('title') as string;
    const rawText = formData.get('body') as string;
 
    if (rawTitle.length > 25) {
        errors.titleError="Title must be below 25 characters";
        return errors;
    }
    
    const sanitizedInput = await sanitizeInput([rawTitle, rawText]);
    
    !sanitizedInput[0] && (errors.titleError = "Title contains illegal characters");
    !sanitizedInput[1] && (errors.descriptionError = "Description contains illegal characters");

    return errors;
}