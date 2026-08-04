'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Modern House Design Trends in 2026',
    excerpt: 'Explore the latest trends in residential architecture, from sustainable materials to smart home integration.',
    category: 'Design Trends',
    readTime: '5 min read',
    date: 'Jul 15, 2026',
    image: '/images/blog-design-trends.png',
  },
  {
    title: 'Building Planning Checklist: What You Need to Know',
    excerpt: 'A comprehensive guide to the essential steps before breaking ground on your construction project.',
    category: 'Planning',
    readTime: '7 min read',
    date: 'Jul 8, 2026',
    image: '/images/blog-planning-checklist.png',
  },
  {
    title: 'Cost-Saving Tips for Your Construction Project',
    excerpt: 'Smart strategies to optimize your budget without compromising on quality or design vision.',
    category: 'Budget',
    readTime: '4 min read',
    date: 'Jul 1, 2026',
    image: '/images/blog-cost-saving.png',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-muted/30 dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              Blog & Insights
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Latest{' '}
              <span className="text-accent">
                Articles
              </span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Expert insights on architecture, construction, and design.
            </p>
          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 100}>
              <Link 
                href={`/blog/${post.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`}
                className="block group h-full bg-card rounded-lg border border-border hover:border-accent hover:shadow-elevated overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-body font-bold uppercase tracking-wider text-white">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-muted-foreground text-xs font-body mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-card-foreground mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-accent text-xs font-body font-bold uppercase tracking-wider group-hover:gap-2 transition-all duration-200">
                    Read More <ArrowRight size={14} />
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
