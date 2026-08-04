'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  MessageCircle,
} from 'lucide-react';

/* Inline SVG social icons (lucide-react dropped brand icons) */
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Architectural Planning',
  'Structural Design',
  'Building Design',
  'CAD Drawings',
  'Interior Planning',
  '3D Rendering',
  'Renovation',
  'Construction Consultation',
];

const socials = [
  { icon: InstagramIcon, href: 'https://instagram.com/arcstone', label: 'Instagram' },
  { icon: FacebookIcon, href: 'https://facebook.com/arcstone', label: 'Facebook' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/company/arcstone', label: 'LinkedIn' },
  { icon: YoutubeIcon, href: 'https://youtube.com/arcstone', label: 'YouTube' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-background border-t border-border text-gray-300">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent rounded-lg rotate-3" />
                  <span className="relative text-white font-heading font-bold text-lg">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg text-white leading-tight tracking-wide">
                    ArcStone
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-body font-light">
                    Constructions
                  </span>
                </div>
              </div>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                Transforming visions into structurally sound, aesthetically pleasing, and functional
                spaces through innovative engineering and modern architectural design.
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-surface hover:bg-accent flex items-center justify-center text-gray-400 hover:text-[#000000] transition-all duration-200 cursor-pointer"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-white text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent text-sm font-body transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-white text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-accent text-sm font-body transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent transition-colors" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-white text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm font-body">
                    123 Architecture Lane, Design District, City - 560001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-white text-sm font-body transition-colors cursor-pointer">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-accent flex-shrink-0" />
                  <a href="mailto:info@arcstone.com" className="text-gray-400 hover:text-white text-sm font-body transition-colors cursor-pointer">
                    info@arcstone.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm font-body">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm font-body">
              © 2026 ArcStone Constructions. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm font-body transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm font-body transition-colors cursor-pointer">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent hover:bg-accent-hover rounded-full flex items-center justify-center text-[#000000] shadow-elevated hover:scale-110 transition-all duration-200 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Back to Top — only visible after scrolling */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 bg-surface border border-border hover:border-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-accent shadow-elevated transition-all duration-300 cursor-pointer ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
