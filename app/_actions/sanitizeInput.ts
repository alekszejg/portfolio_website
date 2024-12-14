"use server"

import sanitize from "sanitize-html"

export default async function sanitizeInput(input: string[]) {
    const cleanInput = input.map(value => sanitize(value));
    return cleanInput;
}