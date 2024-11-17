import PageLayout from '@/app/_layoutComponents/pageLayout';
import HeroSection from '@/app/projects/(project pages)/heroSection';
import PreviewSection from '@/app/projects/(project pages)/previewSection';
import ProjectFeaturePanel, { ImageType } from '@/app/projects/(project pages)/projectFeature';
import styling from '@/app/projects/(project pages)/styling.wrappers';


export default function MangopostWebsiteProjectPage() {
    const heroProps = {
        imgWrapperStyling: "",
        header: "Mangopost Website",
        text: `A bilingual static website showcasing the services offered by Mangopost in 
        both English and German, with contact options via widgets and provided information. The development 
        focused on an intuitive user interface and responsive design.`,
        imgSrc: "/Images/Project Previews/mangopostWebsite.png",
        imgAlt: "Mangopost website's homepage", 
        githubUrl: "https://github.com/alekszejg/mangopost_nextjs",
        localUrl: "https://github.com/alekszejg/mangopost_nextjs"
    };

    return (
        <PageLayout className={styling.layout}>
            <HeroSection {...heroProps} />
        </PageLayout>
    );
}