import Feature from "@/app/projects/(project pages)/_sections/features/feature";


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
   
    return (
        <section>
            {featureList.map((featureProps, index) => {
                const imgSide: "left" | "right" = (index % 2 === 0 ? "right" : "left");
                const allProps = {...featureProps, imgSide: imgSide}
                return (
                    <Feature key={`feature${index + 1}`} {...allProps} />
                );
            })}
        </section>
    );
}
