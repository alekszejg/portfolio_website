export default function Project(props: {imgSrc: string, imgAlt: string, title: string}) {
    const { imgSrc, imgAlt, title } = props;
    
    return (
        <div className="projectWrapper">
            <div className="projectImgWrapper">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <h3>{title}</h3>
        </div>
    );
}