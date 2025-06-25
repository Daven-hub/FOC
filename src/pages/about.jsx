import AdnTabs from "../components/About/AdnTabs";
import CtaSection from "../components/About/CtaSection";
import DomainCards from "../components/About/DomainCards";
import HeroSection from "../components/About/HeroSection";
import PresentationSection from "../components/About/PresentationSection";


export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <HeroSection />
      <PresentationSection />
      <AdnTabs />
      <DomainCards />
      <CtaSection />
    </div>
  );
}
