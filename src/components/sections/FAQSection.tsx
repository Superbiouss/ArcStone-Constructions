'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does an architectural design project take?',
    answer: 'Depending on project size, design usually takes between one and four weeks. Residential projects typically take 1-2 weeks, while larger commercial projects may take 3-4 weeks. We provide a detailed timeline during the initial consultation.',
  },
  {
    question: 'Do you provide structural drawings?',
    answer: 'Yes. Complete structural drawings are available for residential and commercial projects. Our structural designs comply with local building regulations and include RCC design, steel structures, foundation design, and beam & column layouts.',
  },
  {
    question: 'Can I request only a 3D elevation?',
    answer: 'Absolutely. Standalone elevation and rendering services are available. We offer front elevation, side elevation, exterior material visualization, and lighting concepts as individual services.',
  },
  {
    question: 'Do you work outside your city?',
    answer: 'Yes. Remote consultation and online design services are available nationwide. We use video calls, cloud-based collaboration tools, and detailed documentation to ensure seamless communication regardless of location.',
  },
  {
    question: 'What files will I receive?',
    answer: 'You may receive PDF drawings, DWG files, CAD files, high resolution render images, and BOQ (Bill of Quantities) if applicable. All files are delivered in industry-standard formats compatible with major software.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              FAQs
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Questions
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === i
                    ? 'border-accent/30 bg-card shadow-lg'
                    : 'border-border bg-card hover:border-accent/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      openIndex === i ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <HelpCircle size={18} />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-base md:text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
