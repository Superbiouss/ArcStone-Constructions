'use client';

import { useState, useRef, useEffect } from 'react';
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

function AccordionItem({ faq, index, isOpen, onToggle }: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <ScrollReveal delay={index * 80}>
      <div
        className={`rounded-lg border transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'border-accent/30 bg-card shadow-elevated'
            : 'border-border bg-card hover:border-accent/20'
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
        >
          <div className="flex items-center gap-4 pr-4">
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isOpen ? 'bg-accent text-[#000000]' : 'bg-surface text-muted-foreground'
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
              isOpen ? 'rotate-180 text-accent' : ''
            }`}
          />
        </button>
        <div
          id={`faq-answer-${index}`}
          role="region"
          style={{
            maxHeight: isOpen ? `${height}px` : '0px',
            opacity: isOpen ? 1 : 0,
          }}
          className="transition-all duration-300 ease-in-out overflow-hidden"
        >
          <div ref={contentRef} className="px-6 pb-6 pl-20">
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

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
              <span className="text-accent">
                Questions
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
