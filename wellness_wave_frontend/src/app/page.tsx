import Header from "./components/Header";
import BentoGrid from "./components/BentoGrid";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BentoGrid />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}


