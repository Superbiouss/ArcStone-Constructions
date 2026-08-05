import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustIndicators from '@/components/sections/TrustIndicators';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';

const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'));
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'));
const BlogSection = dynamic(() => import('@/components/sections/BlogSection'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustIndicators />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUs />
        <ProcessSection />
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
