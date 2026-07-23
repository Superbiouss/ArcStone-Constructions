'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Blend,
  Settings2,
  BadgeDollarSign,
  Timer,
  ScanSearch,
  LifeBuoy,
} from 'lucide-react';

const reasons = [
  {
    icon: Blend,
    title: 'Engineering Meets Creativity',
    description: 'Every project balances architectural beauty with structural excellence.',
  },
  {
    icon: Settings2,
    title: 'Customized Solutions',
    description: 'Every design is created specifically for your lifestyle, budget, and future requirements.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Cost Effective Design',
    description: 'We optimize layouts to reduce unnecessary construction costs while maintaining quality.',
  },
  {
    icon: Timer,
    title: 'On-Time Delivery',
    description: 'We understand project timelines and deliver every drawing and design as scheduled.',
  },
  {
    icon: ScanSearch,
    title: 'Attention to Detail',
    description: 'Every line, measurement, and structural component is carefully reviewed before delivery.',
  },
  {
    icon: LifeBuoy,
    title: 'End-to-End Support',
    description: "From planning to construction consultation, we're with you throughout your project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Sets Us{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Apart
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 100}>
              <div className="group flex gap-5 p-6 rounded-2xl hover:bg-card hover:shadow-lg hover:border hover:border-border transition-all duration-300 cursor-default">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors duration-300">
                  <reason.icon size={24} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
