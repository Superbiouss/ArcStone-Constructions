'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import {
  MessageSquare,
  Lightbulb,
  PenTool,
  Box,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description: 'Understanding your ideas, requirements, site conditions, and budget.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Concept Development',
    description: 'Initial planning, zoning, and layout concepts.',
    color: 'from-accent to-orange-400',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Design Development',
    description: 'Detailed architectural and structural drawings.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Box,
    number: '04',
    title: 'Visualization',
    description: '3D rendering, elevations, and walkthroughs.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: CheckCircle2,
    number: '05',
    title: 'Final Delivery',
    description: 'Complete construction-ready documentation and consultation.',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-muted/30 dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              Our Process
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Work
              </span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              A structured approach ensuring quality at every stage of your project.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/50 via-accent to-accent/50 origin-left" />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 150}>
                <div className="flex flex-col items-center text-center group">
                  {/* Circle */}
                  <div className={`relative z-10 w-[120px] h-[120px] rounded-full bg-gradient-to-br ${step.color} p-[3px] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center">
                      <step.icon size={28} className="text-foreground mb-1" />
                      <span className="text-xs font-body font-bold text-muted-foreground">STEP {step.number}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative pl-8 border-l-2 border-border space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div className="relative">
                  {/* Dot */}
                  <div className={`absolute -left-[41px] w-5 h-5 rounded-full bg-gradient-to-br ${step.color} border-4 border-background`} />

                  <div className="bg-card rounded-2xl p-6 border border-border ml-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${step.color}`}>
                        <step.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider">Step {step.number}</span>
                        <h3 className="font-heading font-bold text-lg text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
