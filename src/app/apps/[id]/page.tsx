import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppDetailClient from '@/components/AppDetailClient';
import { appsData } from '@/data/apps';
import { notFound } from 'next/navigation';

// Required for Next.js static export path pre-generation
export function generateStaticParams() {
  return appsData.map((app) => ({
    id: app.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AppDetailPage({ params }: PageProps) {
  const { id } = await params;
  const app = appsData.find((a) => a.id === id);

  if (!app) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-6">
        <AppDetailClient app={app} />
      </main>
      <Footer />
    </div>
  );
}
