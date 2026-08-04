import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/#blog" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-body transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Articles
        </Link>
        
        <article className="bg-card border border-border rounded-lg p-8 sm:p-12 shadow-elevated">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-6">
            Blog Article
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8 leading-tight">
            {title}
          </h1>
          <div className="prose prose-invert max-w-none font-body text-muted-foreground">
            <p className="text-lg">
              This is a placeholder for the article "{title}". The full content will be published here in the next update.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
