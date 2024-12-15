import sanitize from "sanitize-html"

export default function sanitizeInput(input: string[]) {
    const cleanInput = input.map(value => sanitize(value));
    return cleanInput;
}