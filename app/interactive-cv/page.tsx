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
        layout: "flex flex-col items-center max-w-[1400px] cvTablet:flex-row cvTablet:items-stretch ultrawide:mx-auto",
        sections: {
            generalInfo: "w-full px-cvPadX-mobile py-cvSectionYGap bg-cvGeneralSection cvTablet:w-generalSectionWidth cvTablet:px-cvPadX-pc cvTablet:hover:bg-cvGeneralHover",
            expertise: "w-full cvTablet:w-expertiseSectionWidth"
        }
    };

    return (
        <PageLayout className={styling.layout}>
            <GeneralInfoSection wrapperStyling={styling.sections.generalInfo} />
            <ExpertiseSection wrapperStyling={styling.sections.expertise} />
        </PageLayout>
    );
};