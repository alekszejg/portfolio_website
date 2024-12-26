"use client"
import { useSearchParams } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import OverviewMedia from "@/app/projects/(project pages)/_sections/overview/media";
import type { ImageArray } from "@/app/projects/(project pages)/_sections/overview/media";
import Stages from "@/app/projects/(project pages)/_sections/overview/stages";



type OverviewSectionProps = {
    wrapperStyling: string,
    images: ImageArray,
    stages: {header: string, text: string}[],
}


export default function OverviewSection({ wrapperStyling, images, stages }: OverviewSectionProps) {
    const searchParams = useSearchParams();
    const scrollToParam = searchParams.get("scrollTo");
    
    const overviewSectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (scrollToParam && scrollToParam === "overview") {
            overviewSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }  
    }, [scrollToParam]);

    const styling = {
        imageCarouselWrapper: "flex flex-col items-center tablet:flex-row tablet:justify-between",
        stagesWrapper: "flex justify-between gap-x-6"
    };

    return (
        <section ref={overviewSectionRef} className={wrapperStyling}>
            <OverviewMedia images={images} wrapperStyling={styling.imageCarouselWrapper}/>
            <Stages stages={stages} wrapperStyling={styling.stagesWrapper}/>
        </section>
    );
}