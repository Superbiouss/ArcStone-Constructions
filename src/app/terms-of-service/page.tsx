import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-body transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <div className="bg-card border border-border rounded-lg p-8 sm:p-12 shadow-elevated">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <div className="space-y-6 font-body text-muted-foreground">
            <p>Last updated: August 2026</p>
            <p>
              These Terms of Service govern your use of the ArcStone Constructions website and services. By accessing our website, you agree to these terms.
            </p>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Use of Website</h2>
            <p>
              The content on this website is for general information purposes only and is subject to change without notice.
            </p>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
            <p>
              All designs, images, and content are the property of ArcStone Constructions unless otherwise stated. Unauthorized use is prohibited.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
