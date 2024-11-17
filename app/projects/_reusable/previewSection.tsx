import ImageCarousel from "@/app/projects/_reusable/imageCarousel";
import ProjectStages from "@/app/projects/_reusable/projectStages";
import type { ImageArray } from "@/app/projects/_reusable/imageCarousel";
import globalStyling from "@/app/projects/styling";

type PreviewSectionProps = {
    images: ImageArray,
    stages: {stage: string, text: string}[],
}


export default function PreviewSection({ images, stages }: PreviewSectionProps) {
    const styling = {
        section: globalStyling.previewSection,
        imageCarouselWrapper: "flex justify-between items-center",
        stagesWrapper: "flex justify-between gap-x-6"
    };

    return (
        <section className={styling.section}>
            <ImageCarousel images={images} wrapperStyling={styling.imageCarouselWrapper}/>
            <ProjectStages stages={stages} wrapperStyling={styling.stagesWrapper}/>
        </section>
    );
}