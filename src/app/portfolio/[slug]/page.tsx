import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PortfolioPage({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/#portfolio" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-body transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        
        <div className="bg-card border border-border rounded-lg p-12 text-center shadow-elevated">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
            Project Showcase
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            This is a placeholder page for the {title} project. The full case study will be added soon.
          </p>
        </div>
      </div>
    </main>
  );
}
