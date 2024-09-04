interface TechSkillLogoProps {
    currentTool: string;
    name: string; 
    imgSrc: string, 
    imgAlt: string, 
    onClick: (toolName: string) => void;
};

export default function TechSkillLogo(props: TechSkillLogoProps) {
    const { currentTool, name, imgSrc, imgAlt, onClick } = props;

    return (
        <div className={currentTool === name ? "techSkillLogoWrapper selectedSkillLogoWrapper" : "techSkillLogoWrapper"} onClick={() => onClick(name)}>
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}