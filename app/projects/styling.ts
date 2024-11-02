const styling = {
    layout: "flex flex-col",
    about: {
        section: "py-14 px-8 box-border bg-yellowProjectPanel tablet:px-1/5 tablet:text-center",
        header: "pb-2 text-[clamp(1.1rem,3vw,1.5rem)] tablet:pb-[0.6rem]",
        text: "text-[clamp(0.9rem,2vw,1.2rem)]"
    },
    panel: {
        wrapper: "flex flex-col items-center py-14 px-8 tablet:flex-row tablet:justify-center tablet:gap-x-18 tablet:py-28 tablet:px-0",
        imgWrapper: "w-full aspect-[5/4] tablet:w-[clamp(375px,40%,437.50px)]",
        svgImgWrapper: "w-[min(170px,55%)] aspect-square tablet:w-[clamp(200px,40%,300px)]",
        img: "w-full h-full rounded-2xl shadow-[0_0_0.55rem_black] aspect-[5/4] object-cover",
        cvgImg: "w-full h-full shadow-[0_0_0.55rem_black] tablet:rounded-2xl",
        textWrapper: "flex flex-col tablet:justify-center tablet:w-2/5 tablet:shrink-0",
        header: "mt-6 mb-2 text-[clamp(1.1rem,3vw,1.5rem)] tablet:mb-4",
        text: "text-[clamp(0.9rem,2vw,1.2rem)]"
    }
}

export default styling;