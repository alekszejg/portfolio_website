type HeroSectionProps = {wrapperStyling: string, header: string, text: string, imgSrc: string, imgAlt: string}

export default function HeroSection({ wrapperStyling, header, text, imgSrc, imgAlt }: HeroSectionProps) {
    const styling = {
        header: "",
        text: "",
    }

    return (
        <section className={wrapperStyling}>
            <h2 className={styling.header}>{header}</h2>
            <p className={styling.text}>{text}</p>
        </section>
    );
}