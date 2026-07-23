'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.png"
          alt="Modern luxury architectural design by ArcStone Constructions"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <ScrollReveal delay={0} direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm font-body mb-8">
              <Sparkles size={14} className="text-accent" />
              Professional Civil Engineering & Architectural Design
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Designing Spaces
              <br />
              That{' '}
              <span className="text-accent">
                Inspire.
              </span>
              <br />
              <span className="text-white/80 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Engineering Structures That Last.
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-xl text-white/70 font-body font-light leading-relaxed mb-10 max-w-2xl">
              We transform concepts into structurally sound, aesthetically pleasing, and functional
              spaces through innovative engineering and modern architectural design.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-[#000000] font-body font-bold text-sm uppercase tracking-[0.1em] rounded-full transition-all duration-300 shadow-elevated hover:scale-105 cursor-pointer"
              >
                Get Free Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 backdrop-blur-md text-white font-body font-bold text-sm uppercase tracking-[0.1em] rounded-full border border-white/30 transition-all duration-300 cursor-pointer"
              >
                Explore Portfolio
              </a>
            </div>
          </ScrollReveal>

          {/* Trust Bar */}
          <ScrollReveal delay={500}>
            <div className="mt-16 flex items-center gap-8 text-white/50 font-body text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Currently taking projects
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="hidden sm:block">Trusted by 180+ clients</div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs font-body uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="text-white/40" />
      </div>
    </section>
  );
}
