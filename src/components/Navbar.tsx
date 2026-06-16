'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Apps', href: '/#apps' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Privacy Hub', href: '/privacy-policy' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        isScrolled 
          ? 'py-3.5 bg-background/70 backdrop-blur-md border-b border-card-border/40' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Utsav<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === link.href || (pathname === '/' && link.href.startsWith('/#'))
                  ? 'text-zinc-900 dark:text-zinc-100' 
                  : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Controls (Theme switch & Mobile menu toggle) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-card-border/60 hover:bg-card-bg/50 text-zinc-650 dark:text-zinc-350 transition-all hover:scale-105"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* GitHub Quick CTA */}
          <a 
            href="https://github.com/utsavjetani95" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-xs font-semibold px-4.5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 transition-all hover:scale-105 active:scale-98"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-full border border-card-border/60 text-zinc-650 dark:text-zinc-350 md:hidden hover:bg-card-bg/50 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] bg-background/95 backdrop-blur-md z-45 md:hidden animate-fade-in flex flex-col justify-between p-6">
          <div className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 border-b border-card-border/30 pb-3"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 pb-8">
            <a 
              href="https://github.com/utsavjetani95" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold text-center text-sm flex items-center justify-center gap-1.5"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
