import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <div className="space-y-6 font-body text-muted-foreground">
            <p>Last updated: August 2026</p>
            <p>
              This is a placeholder Privacy Policy for ArcStone Constructions. We are committed to protecting your personal data and respecting your privacy.
            </p>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, and phone number when you fill out our contact forms.
            </p>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the collected information to respond to your inquiries, provide requested services, and improve our website experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
