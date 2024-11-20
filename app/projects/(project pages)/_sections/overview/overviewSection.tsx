import OverviewMedia from "@/app/projects/(project pages)/_sections/overview/media";
import Stages from "@/app/projects/(project pages)/_sections/overview/stages";
import type { ImageArray } from "@/app/projects/(project pages)/_sections/overview/media";


type OverviewSectionProps = {
    images: ImageArray,
    stages: {header: string, text: string}[],
}


export default function OverviewSection({ images, stages }: OverviewSectionProps) {
    const styling = {
        imageCarouselWrapper: "flex justify-between items-center",
        stagesWrapper: "flex justify-between gap-x-6"
    };

    return (
        <>
        <OverviewMedia images={images} wrapperStyling={styling.imageCarouselWrapper}/>
        <Stages stages={stages} wrapperStyling={styling.stagesWrapper}/>
        </>
    );
}