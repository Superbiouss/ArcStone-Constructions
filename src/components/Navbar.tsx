'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionObserver = () => {
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const cleanup = handleSectionObserver();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup?.();
    };
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent rounded-full rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <span className="relative text-white font-heading font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-foreground leading-tight tracking-wide">
                  ArcStone
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-light">
                  Constructions
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-body font-bold transition-colors duration-200 rounded-full cursor-pointer
                    ${activeSection === link.href.replace('#', '')
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-white hover:bg-muted'
                    }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">


              {/* CTA Button */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-hover text-[#000000] text-xs font-body font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <Phone size={15} />
                Get Consultation
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2.5 rounded-full bg-muted hover:bg-surface text-foreground transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-card shadow-2xl transition-transform duration-300 ease-out ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`flex items-center justify-between px-4 py-3 rounded-full text-base font-body font-bold transition-all duration-200 cursor-pointer
                    ${activeSection === link.href.replace('#', '')
                      ? 'bg-muted text-white'
                      : 'text-muted-foreground hover:text-white hover:bg-muted'
                    }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                  <ChevronDown size={16} className="-rotate-90 opacity-40" />
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent hover:bg-accent-hover text-[#000000] font-body font-bold uppercase tracking-[0.1em] text-sm rounded-full transition-colors cursor-pointer"
              >
                <Phone size={18} />
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
