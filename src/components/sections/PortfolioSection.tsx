'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Interior', '3D Renders'];

const projects = [
  {
    title: 'Modern Luxury Villa',
    category: 'Residential',
    location: 'Bengaluru',
    area: '4,500 sq.ft',
    image: '/images/portfolio-residential.png',
  },
  {
    title: 'Corporate Tower',
    category: 'Commercial',
    location: 'Mumbai',
    area: '25,000 sq.ft',
    image: '/images/portfolio-commercial.png',
  },
  {
    title: 'Logistics Warehouse',
    category: 'Industrial',
    location: 'Pune',
    area: '50,000 sq.ft',
    image: '/images/portfolio-industrial.png',
  },
  {
    title: 'Contemporary Living Room',
    category: 'Interior',
    location: 'Hyderabad',
    area: '1,200 sq.ft',
    image: '/images/portfolio-interior.png',
  },
  {
    title: 'Luxury Bungalow Night Render',
    category: '3D Renders',
    location: 'Goa',
    area: '3,800 sq.ft',
    image: '/images/portfolio-3d-render.png',
  },
  {
    title: 'Modern Villa Exterior',
    category: 'Residential',
    location: 'Chennai',
    area: '5,200 sq.ft',
    image: '/images/hero-banner.png',
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our{' '}
              <span className="text-accent">
                Featured Projects
              </span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Explore our diverse portfolio of residential, commercial, and industrial projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-body text-sm font-bold uppercase tracking-[0.1em] transition-all duration-200 cursor-pointer
                  ${activeFilter === cat
                    ? 'bg-accent text-[#000000] shadow-elevated'
                    : 'bg-muted text-muted-foreground hover:bg-surface hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.title + activeFilter} delay={i * 100}>
              <Link 
                href={`/portfolio/${project.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`}
                aria-label={`${project.title} - ${project.category} project in ${project.location}`} 
                className="block group relative rounded-lg overflow-hidden bg-card border border-border hover:border-accent shadow-sm hover:shadow-elevated transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-3 shadow-elevated">
                      <ExternalLink size={22} className="text-[#000000]" />
                    </div>
                    <span className="text-white font-body font-bold text-xs uppercase tracking-widest">View Project</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-body font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-muted-foreground text-sm font-body">
                    <span>{project.location}</span>
                    <span>{project.area}</span>
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
