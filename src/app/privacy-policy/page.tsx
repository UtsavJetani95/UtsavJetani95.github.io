'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { appsData } from '@/data/apps';
import { Shield, FileText, ArrowRight, Info, Mail, Scale } from 'lucide-react';

export default function PrivacyPolicyHub() {
  const policyList = [
    { id: 'android-tv-remote', name: 'Android TV Remote', version: '2.0', updated: '15th Jan 2025' },
    { id: 'focusflow', name: 'FocusFlow', version: '1.0', updated: '15th Jan 2025' },
    { id: 'spendwise', name: 'SpendWise', version: '1.0', updated: '15th Jan 2025' },
    { id: 'smarttools', name: 'SmartTools', version: '1.0', updated: '15th Jan 2025' },
    { id: 'aiassistant', name: 'AIAssistant', version: '1.0', updated: '15th Jan 2025' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-left">
          
          {/* Header */}
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              <Shield className="w-3.5 h-3.5" /> Compliance Center
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Privacy Policy Hub
            </h1>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              We place the highest value on your trust and prioritize protecting your personal data. Below, you will find links to individual privacy policies required for Google Play Store and Apple App Store submissions.
            </p>
          </div>

          {/* List of Policies */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider">
              Application Policies
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {policyList.map((policy) => (
                <div 
                  key={policy.id} 
                  className="p-5 rounded-2xl border border-card-border/60 bg-card-bg/60 glass-panel flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:scale-[1.005] hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/5 text-accent mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                        {policy.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-500 mt-1">
                        <span>Version {policy.version}</span>
                        <span>•</span>
                        <span>Updated: {policy.updated}</span>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href={`/privacy-policy/${policy.id}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    <span>View Policy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Info (Grievance Redressal / DPDP 2023) */}
          <div className="p-6 rounded-3xl border border-card-border/60 bg-card-bg/30 space-y-5">
            <div className="flex items-center gap-2 border-b border-card-border/30 pb-3">
              <Scale className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                Grievance Redressal & Legal Contacts
              </h3>
            </div>
            
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              In accordance with the Digital Personal Data Protection (DPDP) Act, 2023, the Information Technology Act, 2000, and standard GDPR requirements, if you have any questions, feedback, or grievances regarding our data privacy procedures, please contact our Consent Manager.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-medium">
              <div className="flex items-start gap-3 text-xs">
                <Info className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider">Consent Manager</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold mt-0.5 block">utsab jetani</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider">Email Contact</span>
                  <a href="mailto:utsavjetani95@gmail.com" className="text-accent hover:underline font-semibold mt-0.5 block">
                    utsavjetani95@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
