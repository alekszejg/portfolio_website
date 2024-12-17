import sanitizeHtml from "sanitize-html"


// If one of keys is found, it's replaced by value associated with it
const escapeCharMap: Record<string, string> = {
    "<": "&lt;", 
    ">": "&gt;", 
    "&": "&amp;", 
    '"': "&quot;", 
    "'": "&#x27;"
};


// Escape symbols above with their values if found
function escapeIllegalCharacters(inputValue: string): string {
    const escapeKeys = Object.keys(escapeCharMap);
    
    return escapeKeys.reduce((acc, key) => {
        const globalMatch = new RegExp(key, 'g');
        return acc.replace(globalMatch, escapeCharMap[key]);
    }, inputValue);
}
    

// thow input away entirely or escape it, based on mode
export default function handleRawInput(rawInput: string[], mode: "discard" | "recursiveEscape") {
    return rawInput.map(rawValue => {
        const sanitizedValue = sanitizeHtml(rawValue, {
            disallowedTagsMode: mode === "discard" ? "discard" : "recursiveEscape",
            allowedTags: mode === "discard" ? [] : false,
            allowedAttributes: {},
        });
        
        const escaptedInput = escapeIllegalCharacters(sanitizedValue);
        return escaptedInput
    });
}

