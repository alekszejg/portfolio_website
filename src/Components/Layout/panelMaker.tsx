import {useState, useEffect} from 'react';


interface ProjectFeatureProps {
    extraPanelWrapperClass?: string,
    extraImgContainerClass?: string,
    extraPanelTextContainerClass?: string,
    imgContainerID: string,
    imgID: string,
    imgSide: string,
    imgSrc: string,
    imgAlt: string,
    paragraphContent: string,
    headerContent: string,
}

function ProjectFeaturePanel(props: ProjectFeatureProps) {
    
    let panelWrapperClasses = `panelWrapper ${props.imgSide === "left" ? "panelWrapperImgLeft" : "panelWrapperImgRight"}`;

    if (props.extraPanelWrapperClass !== undefined) {
        panelWrapperClasses += " " + props.extraPanelWrapperClass;
    }

    let imgContainerClasses = `imgContainer ${props.imgSide === "left" ? "imgContainerLeft" : "imgContainerRight"}`;
    
    if (props.extraImgContainerClass !== undefined) {
        imgContainerClasses += " " + props.extraImgContainerClass;
    } 

    return (
        <div className={`featurePanel ${props.imgSide === "left" ? "bluePanel" : "yellowPanel"}`}>
            <div className={panelWrapperClasses}>
                <div className={imgContainerClasses} id={props.imgContainerID}>
                    <img className="panelImage" id={props.imgID} src={props.imgSrc} alt={props.imgAlt} />
                </div>
                <div className={`panelTextContainer ${props.extraPanelTextContainerClass !== undefined && props.extraPanelTextContainerClass}`}>
                    <h2 className="featureHeader">{props.headerContent}</h2>
                    <p className="featureText" dangerouslySetInnerHTML={{ __html: props.paragraphContent}} />
                </div>
            </div>
        </div>
    )
}

export default ProjectFeaturePanel;