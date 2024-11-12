import ImageCarousel from "@/app/projects/_reusable/imageCarousel";
import ProjectStages from "@/app/projects/_reusable/projectStages";
import type { ImageArray } from "@/app/projects/_reusable/imageCarousel";

type PreviewSectionProps = {
    images: ImageArray,
    stages: {stage: string, text: string}[],
    wrapperStyling: string
}

export default function PreviewSection({ images, stages, wrapperStyling}: PreviewSectionProps) {
    const styling = {
        imageCarouselWrapper: "flex justify-between items-center",
        stagesWrapper: "flex justify-between gap-x-6"
    }

    return (
        <section className={wrapperStyling}>
            <ImageCarousel images={images} wrapperStyling={styling.imageCarouselWrapper}/>
            <ProjectStages stages={stages} wrapperStyling={styling.stagesWrapper}/>
        </section>
    )
}