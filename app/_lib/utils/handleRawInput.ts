import sanitizeHtml from "sanitize-html"


// thow input away entirely or escape it, based on mode
export default function handleRawInput(rawInput: string[], mode: "discard" | "recursiveEscape") {
    let sanitizedValue: null | string = null;
    
    return rawInput.map(rawValue => {
        if (mode === "discard") {
            sanitizedValue = sanitizeHtml(rawValue, {disallowedTagsMode: "discard"});
            return sanitizedValue; 
        } else if (mode === "recursiveEscape") {
            sanitizedValue = sanitizeHtml(rawValue, {disallowedTagsMode: "recursiveEscape"});
            const actualValue = sanitizedValue
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&amp;/g, "&")
                .replace(/&#x27;/g, "'")
                .replace(/&quot;/g, '"');
            return actualValue;
        }    
    });
}

