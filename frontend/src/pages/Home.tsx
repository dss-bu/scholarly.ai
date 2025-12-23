import Hero from '../components/Hero';
import ToolsTable from '../components/ToolsTable';
import DemoSection from '../components/DemoSection';
import PrivacySection from '../components/Privacy';
import FeaturesSection from '../components/Features';

export default function Home() {
    return (
        <>
            <Hero />
            <ToolsTable />
            <PrivacySection />
            <FeaturesSection />
            <DemoSection />
        </>
    );
}
