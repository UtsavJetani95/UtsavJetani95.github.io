'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PhoneMockup from '@/components/PhoneMockup';
import { App } from '@/data/apps';
import { 
  Tv, Timer, Wallet, Compass, Sparkles,
  ArrowLeft, ArrowUpRight, Plus, Minus,
  Mail, CheckCircle, FileText
} from 'lucide-react';

interface AppDetailClientProps {
  app: App;
}

export default function AppDetailClient({ app }: AppDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Back button link */}
      <div>
        <Link 
          href="/#apps" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Store</span>
        </Link>
      </div>

      {/* Page Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
        
        {/* Left Column: Specifications / FAQ / Support */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* App Brand Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3.5 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                {app.iconName === 'Tv' && <Tv className="w-7 h-7" />}
                {app.iconName === 'Timer' && <Timer className="w-7 h-7" />}
                {app.iconName === 'Wallet' && <Wallet className="w-7 h-7" />}
                {app.iconName === 'Compass' && <Compass className="w-7 h-7" />}
                {app.iconName === 'Sparkles' && <Sparkles className="w-7 h-7" />}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">{app.name}</h1>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent/80">{app.category}</span>
              </div>
            </div>
            <p className="text-sm md:text-base font-semibold text-zinc-700 dark:text-zinc-350 leading-normal">{app.tagline}</p>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{app.description}</p>
          </div>

          {/* Download CTA Badges */}
          <div className="flex flex-wrap gap-3">
            {app.storeLinks.appStore && (
              <a 
                href={app.storeLinks.appStore} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 shadow-md transition-all hover:scale-105 active:scale-98"
              >
                <span>App Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {app.storeLinks.playStore && (
              <a 
                href={app.storeLinks.playStore} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 shadow-md transition-all hover:scale-105 active:scale-98"
              >
                <span>Google Play</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Detailed Features List */}
          <div className="space-y-4 pt-4 border-t border-card-border/40">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Key Feature Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {app.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-card-border/40">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* App Specific Accordion FAQ */}
          <div className="space-y-4 pt-4 border-t border-card-border/40">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Frequently Asked Questions</h3>
            <div className="space-y-2.5">
              {app.faq.map((faqItem, i) => (
                <div 
                  key={i} 
                  className="border border-card-border/60 rounded-xl overflow-hidden bg-card-bg/40"
                >
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-xs md:text-sm text-zinc-850 dark:text-zinc-150 hover:bg-card-bg/60 transition-colors"
                  >
                    <span>{faqItem.question}</span>
                    {openFaqIndex === i ? <Minus className="w-4 h-4 text-zinc-500" /> : <Plus className="w-4 h-4 text-zinc-500" />}
                  </button>
                  {openFaqIndex === i && (
                    <div className="px-5 pb-4.5 pt-1 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-card-border/30 animate-fade-in">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Support & Legal Compliance Section */}
          <div className="space-y-3.5 pt-5 border-t border-card-border/40 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-card-border/60 bg-card-bg/30 flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Customer Support</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Need assistance or have bugs?</p>
                <a href={`mailto:${app.supportEmail}`} className="text-xs font-semibold text-accent hover:underline mt-1 inline-block">
                  {app.supportEmail}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-card-border/60 bg-card-bg/30 flex items-start gap-3">
              <FileText className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Legal Compliance</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">App Store & Play Store Policy</p>
                <Link href={app.privacyPath} className="text-xs font-semibold text-accent hover:underline mt-1 inline-block">
                  Read Privacy Policy
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Display PhoneMockup Interface */}
        <div className="lg:col-span-5 flex justify-center sticky top-24 pt-4">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full"></div>
            <PhoneMockup type={app.uiMockup.type} data={app.uiMockup.data} />
          </div>
        </div>

      </div>
    </div>
  );
}
