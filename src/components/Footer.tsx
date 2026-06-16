import React from 'react';
import Link from 'next/link';
import { Mail, Globe } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Apps Showcase', href: '/#apps' },
    { name: 'About Developer', href: '/#about' },
    { name: 'Contact Me', href: '/#contact' },
  ];

  const policyLinks = [
    { name: 'Android TV Remote', href: '/privacy-policy/android-tv-remote' },
    { name: 'FocusFlow', href: '/privacy-policy/focusflow' },
    { name: 'SpendWise', href: '/privacy-policy/spendwise' },
    { name: 'SmartTools', href: '/privacy-policy/smarttools' },
    { name: 'AIAssistant', href: '/privacy-policy/aiassistant' },
  ];

  return (
    <footer className="bg-zinc-50 dark:bg-[#0c0c0e] border-t border-card-border/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Brand/Introduction */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Utsav<span className="text-accent">.</span>
            </span>
            <p className="text-sm text-zinc-550 dark:text-zinc-400 max-w-sm leading-relaxed">
              Mobile app developer focused on crafting beautiful, high-performance, and privacy-first Android & iOS applications.
            </p>
            <div className="flex items-center gap-4.5 pt-2">
              <a 
                href="https://github.com/utsavjetani95" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a 
                href="mailto:utsavjetani95@gmail.com" 
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Compliance & App Privacy Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500">
              Privacy Center
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link 
                href="/privacy-policy"
                className="text-sm font-semibold text-zinc-900 dark:text-zinc-150 hover:underline"
              >
                Privacy Policy Hub
              </Link>
              {policyLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {link.name} Policy
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className="border-t border-card-border/30 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            © {currentYear} Utsav Jetani. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-400 dark:text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <span>Made with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
