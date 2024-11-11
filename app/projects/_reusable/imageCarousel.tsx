"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


export type ImageArray = {src: string, alt: string, description: string}[]

export default function ImageCarousel({ images, wrapperStyling }: {images: ImageArray, wrapperStyling: string}) {
    const styling = {

    }

    
    return (
        <div className={wrapperStyling}>
            <button><ChevronLeft /></button>
            <button><ChevronRight /></button>
        </div>
    )
}