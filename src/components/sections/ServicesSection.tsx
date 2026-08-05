'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Building2,
  Ruler,
  HardHat,
  PenTool,
  Box,
  Sofa,
  Camera,
  Hammer,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Architectural Planning',
    description: 'Create detailed building layouts tailored to client requirements while maximizing functionality and efficient use of available space.',
    deliverables: ['Site Planning', 'Floor Plans', 'Space Planning', 'Concept Layouts'],
  },
  {
    icon: Ruler,
    title: 'Building Design',
    description: 'Design modern and practical residential, commercial, institutional, and industrial buildings.',
    deliverables: ['Exterior Design', 'Elevations', 'Building Concepts', 'Facade Design'],
  },
  {
    icon: HardHat,
    title: 'Structural Design',
    description: 'Engineering calculations and structural drawings ensuring safety, durability, and compliance with local building regulations.',
    deliverables: ['RCC Design', 'Steel Structures', 'Foundation Design', 'Beam & Column Layouts'],
  },
  {
    icon: PenTool,
    title: '2D CAD Drawings',
    description: 'Professional construction drawings suitable for execution on site.',
    deliverables: ['Floor Plans', 'Elevations', 'Sections', 'Working Drawings', 'Electrical Layout', 'Plumbing Layout'],
  },
  {
    icon: Box,
    title: '3D Elevation Design',
    description: 'Visualize your project before construction through realistic exterior designs.',
    deliverables: ['Front Elevation', 'Side Elevation', 'Exterior Materials', 'Lighting Concepts'],
  },
  {
    icon: Sofa,
    title: 'Interior Space Planning',
    description: 'Optimize interior layouts to improve comfort, aesthetics, and usability.',
    deliverables: ['Furniture Layout', 'Space Planning', 'Lighting Layout', 'Material Suggestions'],
  },
  {
    icon: Camera,
    title: 'Photorealistic 3D Rendering',
    description: 'High-quality architectural visualizations for presentations and approvals.',
    deliverables: ['Exterior Render', 'Interior Render', 'Day View', 'Night View'],
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    description: 'Upgrade existing buildings while maintaining structural integrity and improving functionality.',
    deliverables: ['Assessment', 'Design Updates', 'Structural Review', 'Material Guidance'],
  },
  {
    icon: MessageSquare,
    title: 'Construction Consultation',
    description: 'Expert guidance from concept to construction completion.',
    deliverables: ['Design Consultation', 'Cost Optimization', 'Material Recommendations', 'Construction Support'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              Our Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Engineering &{' '}
              <span className="text-accent">
                Design Solutions
              </span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              From concept to construction, we provide end-to-end architectural and engineering services.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <Link 
                href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                className="block group relative h-full bg-card rounded-lg p-7 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated cursor-pointer overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300 translate-x-4 -translate-y-4">
                  <service.icon size={120} strokeWidth={1} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} className="text-accent" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-card-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.deliverables.slice(0, 4).map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground text-xs font-body">
                        {item}
                      </span>
                    ))}
                    {service.deliverables.length > 4 && (
                      <span className="px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground text-xs font-body">
                        +{service.deliverables.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Learn More */}
                  <div className="flex items-center gap-1 text-accent text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
