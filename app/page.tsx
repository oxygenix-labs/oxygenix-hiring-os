import { Header } from '@/components/landing-v2/Header';
import { HeroSection } from '@/components/landing-v2/HeroSection';
import { TrustStrip } from '@/components/landing-v2/TrustStrip';
import { ProblemSection } from '@/components/landing-v2/ProblemSection';
import { SolutionSection } from '@/components/landing-v2/SolutionSection';
import { FeaturesGrid } from '@/components/landing-v2/FeaturesGrid';
import { ProductPreview } from '@/components/landing-v2/ProductPreview';
import { PricingSection } from '@/components/landing-v2/PricingSection';
import { FinalCTA } from '@/components/landing-v2/FinalCTA';
import { Footer } from '@/components/landing-v2/Footer';

export default function LandingPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <TrustStrip />
                <ProblemSection />
                <SolutionSection />
                <FeaturesGrid />
                <ProductPreview />
                <PricingSection />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
