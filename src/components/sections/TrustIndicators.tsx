'use client';

import { ScrollReveal, AnimatedCounter } from '@/components/ScrollReveal';
import { Calendar, Briefcase, Users, FileText } from 'lucide-react';

const stats = [
  { icon: Calendar, value: 10, suffix: '+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
  { icon: Briefcase, value: 250, suffix: '+', label: 'Projects Completed', color: 'from-accent to-orange-400' },
  { icon: Users, value: 180, suffix: '+', label: 'Happy Clients', color: 'from-emerald-500 to-teal-500' },
  { icon: FileText, value: 400, suffix: '+', label: 'Architectural Drawings', color: 'from-violet-500 to-purple-500' },
];

export default function TrustIndicators() {
  return (
    <section className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100} direction="up">
              <div className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-xl shadow-black/[0.03] dark:shadow-black/20 border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon size={22} className="text-white" />
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
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
