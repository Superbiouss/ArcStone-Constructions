'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Shield,
  Compass,
  Lightbulb,
  Leaf,
  Eye,
  Heart,
  Target,
  Award,
} from 'lucide-react';

const values = [
  { icon: Shield, label: 'Integrity', desc: 'Honest & transparent in every project' },
  { icon: Compass, label: 'Precision', desc: 'Every measurement matters' },
  { icon: Lightbulb, label: 'Innovation', desc: 'Modern solutions for modern spaces' },
  { icon: Leaf, label: 'Sustainability', desc: 'Building for a better future' },
  { icon: Eye, label: 'Transparency', desc: 'Clear communication always' },
  { icon: Heart, label: 'Client Satisfaction', desc: 'Your vision, our priority' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Better Spaces with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Precision & Innovation
              </span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Our mission is to design structures that are functional, beautiful, sustainable, and built to last.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-office.png"
                  alt="ArcStone Constructions office with architects working on designs"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award size={20} className="text-accent" />
                  </div>
                  <span className="font-heading font-bold text-2xl text-card-foreground">10+</span>
                </div>
                <p className="text-muted-foreground text-sm font-body">Years of Engineering Excellence</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-6">
                Whether you&apos;re planning a dream home, commercial building, office space, or renovation
                project, we combine engineering expertise with architectural creativity to deliver
                exceptional results.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-8">
                Every project begins by understanding your vision and ends with delivering practical,
                cost-effective, and aesthetically refined solutions.
              </p>

              {/* Mission & Vision */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Target size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Our Mission</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      To create safe, innovative, and sustainable spaces that improve everyday living
                      while maintaining the highest engineering standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Our Vision</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      To become one of the most trusted engineering and architectural consulting firms
                      known for creativity, quality, and client satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values */}
        <ScrollReveal>
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-10">
            Our Core Values
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((value, i) => (
            <ScrollReveal key={value.label} delay={i * 80}>
              <div className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="inline-flex p-3 rounded-xl bg-muted group-hover:bg-accent/10 mb-3 transition-colors duration-300">
                  <value.icon size={22} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{value.label}</h4>
                <p className="text-muted-foreground text-xs font-body">{value.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
