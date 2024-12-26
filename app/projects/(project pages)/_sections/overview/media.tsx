"use client"
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


export type ImageArray = {src: string, alt: string, description: string}[]


export default function Media({ images, wrapperStyling }: {images: ImageArray, wrapperStyling: string}) {
    const styling = {
        wrapper: wrapperStyling,
        imgPreview: {
            list: "flex flex-row gap-x-3 mb-4 tablet:flex-col tablet:gap-y-3 tablet:mb-0",
            listItem: "w-[40px] aspect-[5/4] hover:scale-110",
            listItemSelected: "w-[40px] aspect-[5/4] hover:scale-110 border-2 border-[hsl(0,100%,75%)]",
            img: "w-full h-full"
        },
        imgCarousel: {
            wrapper: "flex justify-between items-center mb-6 tablet:mb-0",
            currentImg: {
                wrapper: "flex flex-col gap-y-1.5",
                imgWrapper: "w-[350px] aspect-[5/4] relative",
                img: "w-full h-full",
                text: "text-xs tablet:text-center"
            }
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
                (imgIndex - 1 < 0) ? setImgIndex(images.length - 1) : setImgIndex(imgIndex - 1);
                break;
            case "next": 
                (imgIndex + 1 > images.length - 1) ? setImgIndex(0) : setImgIndex(imgIndex + 1);
                break;
        }
    };

    
    return (
        <div className={styling.wrapper}>
            
            <ul className={styling.imgPreview.list}>
                {images.map((image, index) => (
                    <li 
                    key={`imgPreview${index + 1}`} 
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

            <div className={styling.imgCarousel.wrapper}>
                <button onClick={() => handleArrowClick("previous")}>
                    <ChevronLeft />
                </button>
                
                <div className={styling.imgCarousel.currentImg.wrapper}>
                    <div className={styling.imgCarousel.currentImg.imgWrapper}>
                        <Image 
                        className={styling.imgCarousel.currentImg.img}
                        width={1000} 
                        height={1000} 
                        src={images[imgIndex].src} 
                        alt={images[imgIndex].alt} />
                    </div>
                    <p className={styling.imgCarousel.currentImg.text}>{images[imgIndex].description}</p>
                </div>

                <button onClick={() => handleArrowClick("next")}>
                    <ChevronRight />
                </button>
            </div>

        </div>
    )
}