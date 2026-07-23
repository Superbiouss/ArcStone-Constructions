'use client';

import { ScrollReveal, AnimatedCounter } from '@/components/ScrollReveal';
import { Calendar, Briefcase, Users, FileText } from 'lucide-react';

const stats = [
  { icon: Calendar, value: 10, suffix: '+', label: 'Years Experience' },
  { icon: Briefcase, value: 250, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 180, suffix: '+', label: 'Happy Clients' },
  { icon: FileText, value: 400, suffix: '+', label: 'Architectural Drawings' },
];

export default function TrustIndicators() {
  return (
    <section className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100} direction="up">
              <div className="group relative bg-card rounded-lg p-6 md:p-8 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-full bg-surface mb-4 group-hover:bg-accent transition-colors duration-300`}>
                  <stat.icon size={22} className="text-white group-hover:text-black transition-colors duration-300" />
                </div>

                {/* Counter */}
                <div className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-muted-foreground font-body text-sm">
                  {stat.label}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
