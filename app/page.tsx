import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import BenefitsCtaSection from '@/components/home/BenefitsCtaSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav active="home" />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SolutionsSection />
      <BenefitsCtaSection />
      <SiteFooter />
    </div>
  );
}
