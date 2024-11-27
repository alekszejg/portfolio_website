import type { Metadata } from 'next'
import PageLayout from '@/app/_layoutComponents/pageLayout';
import GeneralInfoSection from '@/app/interactive-cv/_generalSection/section';
import ExpertiseSection from '@/app/interactive-cv/_expertiseSection/section';


export const metadata: Metadata = {
    title: "Interactive CV - Alexey Guljajev",
    description: `Click to view interactive online version of my CV! I'm a self-taught 
    programmer with a diploma in BSc Economics, who is currently building his portfolio...`
};


export default function InteractiveCVPage() {
    const styling = {
        layout: "flex flex-col items-center tablet:flex-row tablet:items-stretch",
        generalInfoSection: "py-cvSectionYGap px-[15%] box-border bg-cvGeneralSection tablet:w-[42%] tablet:px-0 tablet:hover:bg-cvGeneralHover",
        expertiseSection: "flex flex-col items-center tablet:w-[58%]",
    };

    return (
        <PageLayout className={styling.layout}>
            <GeneralInfoSection wrapperStyling={styling.generalInfoSection} />
            <ExpertiseSection wrapperStyling={styling.expertiseSection} />
        </PageLayout>
    );
};