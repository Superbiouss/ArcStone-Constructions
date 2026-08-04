'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
  Ruler,
  IndianRupee,
  Calendar,
  MessageSquare,
} from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Office Address', value: '123 Architecture Lane, Design District, City - 560001' },
  { icon: Phone, label: 'Phone Number', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email Address', value: 'info@arcstone.com', href: 'mailto:info@arcstone.com' },
  { icon: Clock, label: 'Business Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM' },
];

const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Interior Design',
  '3D Rendering',
  'Renovation',
  'Consultation',
];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  plotSize: string;
  location: string;
  budget: string;
  consultationDate: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    plotSize: '',
    location: '',
    budget: '',
    consultationDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-card rounded-lg p-12 border border-border shadow-elevated">
            <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-emerald-500" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Thank You for Reaching Out!
            </h3>
            <p className="text-muted-foreground font-body text-lg mb-6">
              We&apos;ve received your inquiry and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => { setIsSubmitted(false); setFormData({ fullName: '', phone: '', email: '', projectType: '', plotSize: '', location: '', budget: '', consultationDate: '', message: '' }); }}
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-[#000000] font-body font-bold text-sm uppercase tracking-widest rounded-full transition-colors cursor-pointer"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
              Contact Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let&apos;s Start Your{' '}
              <span className="text-accent">
                Project
              </span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 md:p-10 border border-border shadow-elevated" noValidate>
              <div className="grid md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-fullName" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                    <User size={14} className="text-muted-foreground" />
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    placeholder="John Doe"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                    className={`w-full px-4 py-3 rounded-md bg-surface border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all ${
                      errors.fullName ? 'border-destructive' : 'border-border'
                    }`}
                  />
                  {errors.fullName && <p id="error-fullName" role="alert" className="text-destructive text-xs mt-1 font-body">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                    <Phone size={14} className="text-muted-foreground" />
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                    className={`w-full px-4 py-3 rounded-md bg-surface border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all ${
                      errors.phone ? 'border-destructive' : 'border-border'
                    }`}
                  />
                  {errors.phone && <p id="error-phone" role="alert" className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                    <Mail size={14} className="text-muted-foreground" />
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className={`w-full px-4 py-3 rounded-md bg-surface border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all ${
                      errors.email ? 'border-destructive' : 'border-border'
                    }`}
                  />
                  {errors.email && <p id="error-email" role="alert" className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="contact-projectType" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                    <Building2 size={14} className="text-muted-foreground" />
                    Project Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="contact-projectType"
                    value={formData.projectType}
                    onChange={(e) => handleChange('projectType', e.target.value)}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? 'error-projectType' : undefined}
                    className={`w-full px-4 py-3 rounded-md bg-surface border font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer appearance-none ${
                      errors.projectType ? 'border-destructive' : 'border-border'
                    } ${!formData.projectType ? 'text-muted-foreground/50' : ''}`}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <p id="error-projectType" role="alert" className="text-destructive text-xs mt-1 font-body">{errors.projectType}</p>}
                </div>

                {/* Plot Size */}
                <div>
                  <label htmlFor="contact-plotSize" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                    <Ruler size={14} className="text-muted-foreground" />
                    Plot Size
                  </label>
                  <input
                    id="contact-plotSize"
                    type="text"
                    value={formData.plotSize}
                    onChange={(e) => handleChange('plotSize', e.target.value)}
                    placeholder="e.g. 2400 sq.ft"
                    className="w-full px-4 py-3 rounded-md bg-surface border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="contact-location" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                    <MapPin size={14} className="text-muted-foreground" />
                    Project Location
                  </label>
                  <input
                    id="contact-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    placeholder="City, State"
                    className="w-full px-4 py-3 rounded-md bg-surface border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="contact-budget" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                    <IndianRupee size={14} className="text-muted-foreground" />
                    Estimated Budget
                  </label>
                  <input
                    id="contact-budget"
                    type="text"
                    value={formData.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    placeholder="e.g. ₹50 Lakhs"
                    className="w-full px-4 py-3 rounded-md bg-surface border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>

                {/* Consultation Date */}
                <div>
                  <label htmlFor="contact-consultationDate" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                    <Calendar size={14} className="text-muted-foreground" />
                    Preferred Consultation Date
                  </label>
                  <input
                    id="contact-consultationDate"
                    type="date"
                    value={formData.consultationDate}
                    onChange={(e) => handleChange('consultationDate', e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-surface border border-border font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label htmlFor="contact-message" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                  <MessageSquare size={14} className="text-muted-foreground" />
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  className={`w-full px-4 py-3 rounded-md bg-surface border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none ${
                    errors.message ? 'border-destructive' : 'border-border'
                  }`}
                />
                {errors.message && <p id="error-message" role="alert" className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover disabled:bg-surface disabled:text-muted-foreground text-[#000000] font-body font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 shadow-elevated hover:scale-[1.02] cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* Contact Info + Map */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border shadow-elevated">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                    <info.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground text-sm mb-0.5">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-muted-foreground font-body text-sm hover:text-accent transition-colors cursor-pointer">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground font-body text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296514!2d77.49085452925899!3d12.954517017224416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717849876543!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ArcStone Constructions Office Location"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
