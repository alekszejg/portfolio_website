import Feature from "@/app/projects/(project pages)/_sections/features/feature";
import globalStyling from "@/app/projects/(project pages)/styling.wrappers";

export type FeatureImg = "regular" | "svg";

export interface FeatureProps {
    imgIsSVG?: boolean,
    imgSrc: string,
    imgAlt: string,
    header: string,
    text: string,
    imgExtraStyling?: string
}

export interface AllFeatureProps extends FeatureProps {
    imgSide: "left" | "right",
}


export default function FeaturesSection({ featureList }: {featureList: FeatureProps[]}) {
    const styling = {
        section: globalStyling.featureWrapper,
    }

    return (
        <>
        {featureList.map((featureProps, index) => {
            const imgSide: "left" | "right" = (index % 2 === 0 ? "right" : "left");
            const allProps = {...featureProps, imgSide: imgSide}
            return (
                <section key={`feature${index + 1}`} className={`${styling.section} ${index % 2 === 0 ? "bg-yellowProjectPage" : "bg-blueProjectPage"}`}>
                    <Feature {...allProps} />
                </section>
            );
        })}
        </>
    );
}
