"use client"
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


export type ImageArray = {src: string, alt: string, description: string}[]

export default function ImageCarousel({ images, wrapperStyling }: {images: ImageArray, wrapperStyling: string}) {
    const styling = {
        imgPreview: {
            list: "flex flex-col gap-y-3",
            listItem: "w-[40px] aspect-[5/4] hover:scale-110",
            listItemSelected: "w-[40px] aspect-[5/4] hover:scale-110 border-2 border-[hsl(0,100%,75%)]",
            img: "w-full h-full"
        },
        currentImg: {
            wrapper: "flex flex-col gap-y-1.5",
            imgWrapper: "w-[350px] aspect-[5/4]",
            img: "w-full h-full",
            text: "text-xs tablet:text-center"
        }
    }

    const [imgIndex, setImgIndex] = useState<number>(0);
    
    const handleImgClick = (newImgIndex: number) => {
        if (imgIndex !== newImgIndex) {
            setImgIndex(newImgIndex)
        }
    }

    const handleArrowClick = (switchTo: "previous" | "next") => {
        switch (switchTo) {
            
            case "previous":
                if (imgIndex - 1 < 0) {
                    setImgIndex(images.length - 1);
                } else {
                    setImgIndex(imgIndex - 1);
                }
                break;

            case "next":
                if (imgIndex + 1 > images.length - 1) {
                    setImgIndex(0);
                } else {
                    setImgIndex(imgIndex + 1);
                }
                break;
        }
    };

    
    return (
        <div className={wrapperStyling}>
            
            <ul className={styling.imgPreview.list}>
                {images.map((image, index) => (
                    <li 
                    key={`image${index + 1}`} 
                    className={imgIndex === index ? styling.imgPreview.listItemSelected : styling.imgPreview.listItem}
                    onClick={() => handleImgClick(index)}>
                        <Image 
                        className={styling.imgPreview.img} 
                        width={100} 
                        height={100} 
                        src={image.src} 
                        alt={image.alt} />
                    </li>
                ))}
            </ul>

            <button onClick={() => handleArrowClick("previous")}><ChevronLeft /></button>
            
            <div className={styling.currentImg.wrapper}>
                <div className={styling.currentImg.imgWrapper}>
                    <Image 
                    className={styling.currentImg.img}
                    width={1000} 
                    height={1000} 
                    src={images[imgIndex].src} 
                    alt={images[imgIndex].alt} />
                </div>
                <p className={styling.currentImg.text}>{images[imgIndex].description}</p>
            </div>

            <button onClick={() => handleArrowClick("next")}><ChevronRight /></button>
        </div>
    )
}