'use client';

import { useState, useEffect, useCallback } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Excellent planning and attention to detail. The final design exceeded our expectations. ArcStone truly understands the balance between aesthetics and functionality.',
    name: 'Rajesh Kumar',
    role: 'Residential Client',
    project: 'Luxury Villa, Bengaluru',
    rating: 5,
  },
  {
    quote: 'Professional, responsive, and highly knowledgeable throughout the project. They delivered our commercial complex design ahead of schedule with outstanding quality.',
    name: 'Priya Sharma',
    role: 'Business Owner',
    project: 'Corporate Office, Mumbai',
    rating: 5,
  },
  {
    quote: 'The 3D renderings helped us visualize our dream home before construction. Every detail was captured perfectly. We couldn\'t be happier with the result.',
    name: 'Arun Patel',
    role: 'Homeowner',
    project: 'Modern Bungalow, Pune',
    rating: 5,
  },
  {
    quote: 'Their structural design expertise gave us complete confidence in the safety and durability of our warehouse facility. Highly recommended for industrial projects.',
    name: 'Vikram Singh',
    role: 'Industrial Client',
    project: 'Logistics Warehouse, Chennai',
    rating: 5,
  },
  {
    quote: 'From concept to final drawings, the team was incredibly supportive. Their renovation design transformed our outdated space into a modern masterpiece.',
    name: 'Meera Reddy',
    role: 'Renovation Client',
    project: 'Home Renovation, Hyderabad',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    // Wait for fade-out, then change slide
    setTimeout(() => {
      setCurrent(index);
      // Allow fade-in to complete before enabling next transition
      setTimeout(() => setIsTransitioning(false), 300);
    }, 200);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our{' '}
              <span className="text-accent">
                Clients Say
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <ScrollReveal>
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="bg-card rounded-lg p-8 md:p-12 border border-border shadow-elevated relative overflow-hidden">
              {/* Decorative Quote */}
              <Quote size={80} className="absolute top-6 right-6 text-accent/10" />

              {/* Slide content with fade transition */}
              <div
                className="transition-opacity duration-300 ease-in-out"
                style={{ opacity: isTransitioning ? 0 : 1 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground font-body text-lg md:text-xl leading-relaxed mb-8 relative z-10 min-h-[160px]">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-heading font-bold text-xl">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-lg">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-muted-foreground font-body text-sm">
                        {testimonials[current].role} • {testimonials[current].project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-card border border-border hover:bg-surface flex items-center justify-center text-foreground hover:text-accent transition-all duration-200 cursor-pointer shadow-elevated"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === current
                        ? 'bg-accent w-8'
                        : 'bg-border hover:bg-muted-foreground w-2.5'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === current ? 'true' : 'false'}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-card border border-border hover:bg-surface flex items-center justify-center text-foreground hover:text-accent transition-all duration-200 cursor-pointer shadow-elevated"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
