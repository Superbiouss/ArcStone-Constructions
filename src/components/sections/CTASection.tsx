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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/75" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-sm font-body font-medium mb-6 border border-white/10">
            Start Your Project
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-body font-semibold text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar size={20} />
              Schedule Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-body font-semibold text-lg rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
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
