"use client"
import { useSearchParams } from "next/navigation";
import { useLayoutEffect, useRef } from "react";


type Props = {
    children: React.ReactNode,
    wrapperStyling: string
};


export default function OverviewClientWrapper({ children, wrapperStyling }: Props) {
    const searchParams = useSearchParams();
    const scrollToParam = searchParams.get("scrollTo");
    
    const overviewSectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (scrollToParam && scrollToParam === "overview") {
            overviewSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }  
    }, [scrollToParam]);

    return (
        <>
        <section ref={overviewSectionRef} className={wrapperStyling}>
            {children}
        </section>
        </>
    );
}