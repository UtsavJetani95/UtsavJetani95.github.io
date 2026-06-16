import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPrivacyPolicyBySlug, getAllPrivacyPolicySlugs } from '@/utils/markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, FileCheck, Scale } from 'lucide-react';
import { notFound } from 'next/navigation';

// Pre-generate static paths at build-time for static export
export async function generateStaticParams() {
  const slugs = getAllPrivacyPolicySlugs();
  return slugs.map((slug) => ({
    id: slug,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { id } = await params;
  
  try {
    const policy = getPrivacyPolicyBySlug(id);
    
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-24 pb-20 px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Breadcrumb Navigation */}
            <div>
              <Link 
                href="/privacy-policy" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-550 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Privacy Hub</span>
              </Link>
            </div>

            {/* Document Details Card */}
            <div className="p-6 rounded-2xl border border-card-border/60 bg-card-bg/60 glass-panel space-y-4">
              <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {policy.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-xs text-zinc-550 border-t border-card-border/30 pt-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <span>Last Updated: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{policy.lastUpdated}</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-zinc-400" />
                  <span>Version: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{policy.version}</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-zinc-400" />
                  <span>App: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{policy.appName}</span></span>
                </div>
              </div>
            </div>

            {/* Markdown rendered HTML Content */}
            <article 
              className="prose prose-zinc dark:prose-invert max-w-none text-left"
              dangerouslySetInnerHTML={{ __html: policy.htmlContent }}
            />

            {/* Back CTA */}
            <div className="border-t border-card-border/30 pt-8 text-center">
              <Link 
                href="/privacy-policy" 
                className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline"
              >
                <span>Back to Privacy Hub</span>
                <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
