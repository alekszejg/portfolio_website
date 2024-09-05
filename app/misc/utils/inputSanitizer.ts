import sanitizeHtml from 'sanitize-html';

export function inputSanitizer(rawInput: string[]) {
    return rawInput.map(rawValue => sanitizeHtml(rawValue));
}
