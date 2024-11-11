import ImageCarousel from "@/app/projects/_reusable/imageCarousel";
import ProjectStages from "@/app/projects/_reusable/projectStages";

type HeroSectionProps = {
    stages: {stage: string, text: string}[],
    wrapperStyling: string
}

export default function HeroSection({ stages, wrapperStyling}: HeroSectionProps) {
    const styling = {
        imageCarouselWrapper: "flex justify-between items-center",
        stagesWrapper: "flex justify-between"
    }

    return (
        <section className={wrapperStyling}>
            <ImageCarousel wrapperStyling={styling.imageCarouselWrapper}/>
            <ProjectStages stages={stages} wrapperStyling={styling.stagesWrapper}/>
        </section>
    )
}