import PageLayout from '@/app/_layoutComponents/pageLayout';
import HeroSection from '@/app/projects/(project pages)/_sections/hero/heroSection';
import { allProjects } from '@/app/projects/projects.data';
import OverviewClientWrapper from '@/app/projects/(project pages)/_sections/overview/clientWrapper';
import OverviewSection from '@/app/projects/(project pages)/_sections/overview/overviewSection';
import FeaturesSection, { FeatureProps } from '@/app/projects/(project pages)/_sections/features/featuresSection';
import styling from '@/app/projects/(project pages)/styling.wrappers';


export default function MangopostWebsiteProjectPage() {
    const heroProps = {
        header: "Mangopost Website",
        text: `A bilingual static website showcasing the services offered by Mangopost in 
        both English and German, with contact options via widgets and provided information. The development 
        focused on an intuitive user interface and responsive design.`,
        imgSrc: "/Images/Project Previews/mangopostWebsite.png",
        imgAlt: "Mangopost website's homepage", 
        githubUrl: "https://github.com/alekszejg/mangopost_nextjs",
        localPath: "https://github.com/alekszejg/mangopost_nextjs"
    };

    const imageList = [
        {
            src: "/Images/Projects/Mangopost/engagingNavigation.png",
            alt: "engaging website navigation",
            description: "Engaging website navigation through distinct eye-catching buttons containing a call-to-action"
        },
        {
            src: "/Images/Projects/Mangopost/visualization.png",
            alt: "visualizing complex ideas #1",
            description: "Improving and simplifying the presentation of text-heavy information through visuals"
        },
        {
            src: "/Images/Projects/Mangopost/visualization2.png",
            alt: "visualizing complex ideas #2",
            description: "Improving and simplifying the presentation of text-heavy information through visuals"
        },
        {
            src: "/Images/Projects/Mangopost/contactDetails.png", 
            alt: "Interactive contact details", 
            description: "Interactive contact details and widgets to simplify communication process"
        },
        {
            src: "/Images/Projects/Mangopost/localization.png", 
            alt: "flexible localization logic", 
            description: "Flexible localization logic which allows more translations to be added later"
        },
    ];

    const stages = [
        {header: "Planning", text: ``
        },
        {header: "Development", text: ``
        },
        {header: "Production", text: ``

        }
    ];

    return (
        <PageLayout className={styling.layout}>
            
            <HeroSection {...heroProps} />

            <OverviewClientWrapper wrapperStyling={styling.overviewSection}>
                <OverviewSection images={imageList} stages={stages} />
            </OverviewClientWrapper>

        </PageLayout>
    );
}