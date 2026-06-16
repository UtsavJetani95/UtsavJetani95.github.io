'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhoneMockup from '@/components/PhoneMockup';
import { appsData, App } from '@/data/apps';
import { 
  Tv, Timer, Wallet, Compass, Sparkles,
  Smartphone, Code, Cpu, Database, Cloud, Globe, 
  Send, Mail, ArrowRight, ExternalLink,
  Award, Download, Zap, Heart, CheckCircle
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Contact Form States
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['All', 'TV Remote Apps', 'Productivity Apps', 'Utility Apps', 'Expense Apps', 'AI Apps'];

  const stats = [
    { label: 'Apps Published', value: '5+', icon: <Smartphone className="w-5 h-5 text-accent" /> },
    { label: 'Total Downloads', value: '150K+', icon: <Download className="w-5 h-5 text-emerald-500" /> },
    { label: 'Years Experience', value: '5+', icon: <Award className="w-5 h-5 text-amber-500" /> },
    { label: 'Technologies', value: '8+', icon: <Zap className="w-5 h-5 text-indigo-500" /> }
  ];

  const skills = [
    { name: 'Flutter', desc: 'Cross-platform dev', icon: <Smartphone className="w-6 h-6 text-sky-500" /> },
    { name: 'SwiftUI', desc: 'Native iOS widgets', icon: <Code className="w-6 h-6 text-orange-500" /> },
    { name: 'Kotlin', desc: 'Native Android core', icon: <Cpu className="w-6 h-6 text-indigo-500" /> },
    { name: 'Firebase', desc: 'Backend & analytics', icon: <Database className="w-6 h-6 text-amber-500" /> },
    { name: 'AdMob', desc: 'App monetization', icon: <Globe className="w-6 h-6 text-emerald-500" /> },
    { name: 'REST APIs', desc: 'Integrations & data', icon: <Cloud className="w-6 h-6 text-blue-500" /> },
    { name: 'ASO', desc: 'App Store Optimization', icon: <Sparkles className="w-6 h-6 text-purple-500" /> },
    { name: 'UI/UX Design', desc: 'Figma to layout', icon: <Heart className="w-6 h-6 text-red-500" /> }
  ];

  const filteredApps = selectedCategory === 'All' 
    ? appsData 
    : appsData.filter(app => app.category === selectedCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 px-6">
          <div className="absolute inset-0 bg-radial from-accent/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> Available for projects
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white">
                Crafting Premium,<br />
                <span className="bg-gradient-to-r from-accent to-indigo-500 bg-clip-text text-transparent">
                  Privacy-First
                </span> Mobile Apps
              </h1>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                Hi, I'm **Utsav Jetani**. I specialize in engineering high-performance Android & iOS applications with clean design aesthetics, seamless micro-interactions, and robust local-first architectures.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="#apps" 
                  className="px-6 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 shadow-lg shadow-accent/25 transition-all hover:scale-105 active:scale-98"
                >
                  View Apps
                </Link>
                <Link 
                  href="#contact" 
                  className="px-6 py-3.5 rounded-full border border-card-border/80 bg-card-bg/40 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:bg-card-bg/75 transition-all hover:scale-105 active:scale-98"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Premium App Mockup Simulator display on Hero */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 w-72 h-72 bg-gradient-to-tr from-accent/20 to-indigo-500/20 blur-3xl -z-10 rounded-full mx-auto my-auto animate-pulse"></div>
              <PhoneMockup type="remote" data={{ tvName: "Sony Bravia Smart TV", status: "Connected" }} />
            </div>

          </div>
        </section>

        {/* 2. Stats & About Me Section */}
        <section id="about" className="py-20 bg-zinc-50/50 dark:bg-zinc-950/20 border-t border-b border-card-border/40 px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Stats Card Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-card-border/60 bg-card-bg/60 glass-panel text-center flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform">
                  <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900">{stat.icon}</div>
                  <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">{stat.value}</div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* About text description */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-center">
              <div className="md:col-span-5 text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white">
                  Focused on Quality and Simplicity
                </h2>
                <div className="w-12 h-1 bg-accent rounded-full mt-3"></div>
              </div>
              <div className="md:col-span-7 text-left space-y-4">
                <p className="text-zinc-750 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
                  As a mobile app architect, I design interfaces that feel alive yet unobtrusive. I believe that premium software respects its users, which is why my creations prioritize **on-device processing, offline capabilities, and zero hidden tracking**.
                </p>
                <p className="text-zinc-750 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
                  Whether developing cross-platform applications in **Flutter** or tuning platform optimizations using native **SwiftUI** and **Kotlin**, my focus is always on creating fluid, accessible, and store-compliant tools.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Skills / Tech Stack Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white">Technical Core Capabilities</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
              A refined selection of platforms and frameworks utilized to assemble world-class mobile experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="p-5 rounded-2xl border border-card-border/60 bg-card-bg/60 dark:hover:bg-zinc-900/50 hover:bg-zinc-100/40 text-left transition-all duration-300 relative overflow-hidden group cursor-default"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="mb-3.5 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">{skill.name}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">{skill.desc}</p>
                
                {/* Micro-animation border glow on hover */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 border border-accent/25 rounded-2xl pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Portfolio / Apps Showcase Section */}
        <section id="apps" className="py-20 bg-zinc-50/50 dark:bg-zinc-950/20 border-t border-card-border/40 px-6">
          <div className="max-w-6xl mx-auto space-y-12 text-center">
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white">Mobile Applications Store</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto font-medium">
                Tap on apps below to preview screens and details. All products are fully GDPR/DPDP compliant.
              </p>
              
              {/* Category Filter Chips */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4.5 py-2 rounded-full text-xs font-semibold border transition-all ${
                      selectedCategory === cat 
                        ? 'bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-sm' 
                        : 'bg-card-bg/60 border-card-border hover:bg-card-bg text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Apps Grid List */}
            <div className="grid grid-cols-1 gap-12 pt-4">
              <AnimatePresence mode="popLayout">
                {filteredApps.map((app) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    key={app.id} 
                    className="p-6 md:p-8 rounded-3xl border border-card-border/60 bg-card-bg/60 glass-panel grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
                  >
                    {/* Left text column */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                          {app.iconName === 'Tv' && <Tv className="w-6 h-6" />}
                          {app.iconName === 'Timer' && <Timer className="w-6 h-6" />}
                          {app.iconName === 'Wallet' && <Wallet className="w-6 h-6" />}
                          {app.iconName === 'Compass' && <Compass className="w-6 h-6" />}
                          {app.iconName === 'Sparkles' && <Sparkles className="w-6 h-6" />}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-extrabold text-zinc-900 dark:text-white">{app.name}</h3>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-accent/80">{app.category}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 leading-normal">{app.tagline}</p>
                      <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{app.description}</p>
                      
                      {/* Features Bullet List */}
                      <div className="space-y-2 pt-1">
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Key Highlights</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {app.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-zinc-750 dark:text-zinc-350">
                              <span className="text-accent mt-0.5">•</span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTAs and Store links */}
                      <div className="flex flex-wrap items-center gap-4 pt-3">
                        <Link 
                          href={`/apps/${app.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4.5 py-2.5 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors shadow-md shadow-accent/10"
                        >
                          <span>Full Specifications</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        
                        <Link 
                          href={`/privacy-policy/${app.id}`}
                          className="text-xs font-medium text-zinc-500 hover:text-accent dark:hover:text-accent transition-colors underline decoration-dotted"
                        >
                          Compliance Privacy Policy
                        </Link>
                      </div>
                    </div>

                    {/* Right interactive phone simulation column */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="scale-90 md:scale-95 origin-center">
                        <PhoneMockup type={app.uiMockup.type} data={app.uiMockup.data} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* 5. Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Contact text side */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">Let's build something beautiful.</h2>
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
                Have a mobile project, an app store compliance issue, or a custom widget design in mind? Drop me a message and let's align.
              </p>
              
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-xs md:text-sm">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-500"><Mail className="w-4.5 h-4.5" /></div>
                  <a href="mailto:utsavjetani95@gmail.com" className="font-semibold text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors">
                    utsavjetani95@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs md:text-sm">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-500"><GithubIcon className="w-4.5 h-4.5" /></div>
                  <a href="https://github.com/utsavjetani95" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors">
                    github.com/utsavjetani95
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="p-6 md:p-8 rounded-3xl border border-card-border/60 bg-card-bg/60 glass-panel shadow-xl text-left relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleFormSubmit} 
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Full Name</label>
                          <input 
                            type="text" 
                            required
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 text-sm rounded-xl border border-card-border/75 bg-background focus:outline-none focus:border-accent text-zinc-800 dark:text-zinc-100 placeholder-zinc-400"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
                          <input 
                            type="email" 
                            required
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 text-sm rounded-xl border border-card-border/75 bg-background focus:outline-none focus:border-accent text-zinc-800 dark:text-zinc-100 placeholder-zinc-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Your Message</label>
                        <textarea 
                          rows={4}
                          required
                          placeholder="Tell me about your mobile application project..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-card-border/75 bg-background focus:outline-none focus:border-accent text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 resize-none"
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-bold text-sm hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center flex flex-col items-center justify-center gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-inner">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Message Sent Successfully!</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
                          Thank you for reaching out. I have received your email and will respond within 24 hours.
                        </p>
                      </div>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-2 text-xs font-semibold text-accent hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
