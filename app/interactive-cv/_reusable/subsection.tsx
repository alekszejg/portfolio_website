type subsectionProps = {
    wrapperStyling: string,
    children: React.ReactNode
}

export default function Subsection({ wrapperStyling, children }: subsectionProps) {

    // styles with locally written string values match between sections
    const styling = {
        section: wrapperStyling,
        header: "pl-2 text-center font-medium text-xl text-nowrap",
        lists: "flex flex-col gap-y-6 mt-4 tablet:mt-6",
        
        expertiseSection: {
            skillBlockWrapper: "flex flex-col items-center w-full"
        }
        
    }


    return (
        <section className={styling.section}>
            {children}
        </section>
    );
}