'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-background.png"
          alt="Construction site at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#121212]/90" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-xs font-body font-bold uppercase tracking-wider mb-6 border border-white/10">
            Start Your Project
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your
            <br />
            <span className="text-accent">
              Dream Project?
            </span>
          </h2>

          <p className="text-white/70 font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Let&apos;s transform your vision into a functional and beautiful reality. Get started with
            a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-[#000000] font-body font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 shadow-elevated hover:scale-105 cursor-pointer"
            >
              <Calendar size={20} />
              Schedule Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 backdrop-blur-md text-white font-body font-bold text-sm uppercase tracking-widest rounded-full border border-white/30 transition-all duration-300 cursor-pointer"
            >
              Request a Quote
              <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
