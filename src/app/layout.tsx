import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Utsav Jetani | Mobile App Developer | iOS & Android App Creator",
  description: "Portfolio of Utsav Jetani, a premium mobile app developer building elegant, privacy-first, and high-performance Android & iOS applications using Flutter, SwiftUI, and Kotlin.",
  keywords: ["Utsav Jetani", "Mobile App Developer", "iOS Developer", "Android Developer", "Flutter", "SwiftUI", "Kotlin", "Privacy-first Apps", "Developer Portfolio", "App Creator", "Android TV Remote"],
  authors: [{ name: "Utsav Jetani", url: "https://utsavjetani95.github.io/" }],
  creator: "Utsav Jetani",
  metadataBase: new URL("https://utsavjetani95.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utsavjetani95.github.io/",
    title: "Utsav Jetani | Mobile App Developer & Creator",
    description: "Premium, minimal, and high-performance iOS & Android applications built with privacy and user experience at the core.",
    siteName: "Utsav Jetani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utsav Jetani | Mobile App Developer",
    description: "Premium, minimal, and high-performance iOS & Android applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
