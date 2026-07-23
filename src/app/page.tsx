import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustIndicators from '@/components/sections/TrustIndicators';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessSection from '@/components/sections/ProcessSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import BlogSection from '@/components/sections/BlogSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustIndicators />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
