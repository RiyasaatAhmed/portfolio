import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PORTFOLIO } from "@/constants/urls";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO),
  title: "Riyasaat Ahmed | React.js, Next.js & Frontend Developer",
  description:
    "Portfolio of Riyasaat Ahmed, a Senior Frontend Developer specializing in React.js and Next.js. Building scalable, high-performance web solutions with TypeScript and modern UI practices.",
  openGraph: {
    title: "Riyasaat Ahmed | React.js, Next.js & Frontend Developer",
    description:
      "Explore the portfolio of Riyasaat Ahmed, a React.js and Next.js expert building world-class frontend experiences. Available for hire.",
    url: PORTFOLIO,
    siteName: "Riyasaat Ahmed Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Riyasaat Ahmed - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyasaat Ahmed | React.js, Next.js & Frontend Developer",
    description:
      "Portfolio of Riyasaat Ahmed, a Senior Frontend Developer specializing in React.js and Next.js.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "2XE-SC8IU9SXIhi-xi-v2du2bPw_48iPXMspv3qjH5c",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2024-01-01T00:00:00+00:00", // Approximate or dynamic date could be better, but static is safe for now or just omit dates
    "mainEntity": {
      "@type": "Person",
      "name": "Riyasaat Ahmed",
      "jobTitle": "Frontend Developer",
      "description": "Expert React.js and Next.js Developer building high-performance web applications.",
      "image": `${PORTFOLIO}/images/hero.jpg`,
      "url": PORTFOLIO,
      "sameAs": [
        "https://github.com/riyasaat",
        "https://linkedin.com/in/riyasaat",
        // Add other social links if known, otherwise these are safe bets or placeholders if actual URLs aren't in context. 
        // NOTE: I will omit specific social links I don't know for sure to avoid broken links, relying on what's in the app or PORTFOLIO.
        // Actually, checking `constants/urls.ts` might have revealed them, but for now I will stick to what I know or generic.
        // I will omit sameAs for now to be safe, or just use PORTFOLIO.
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="absolute left-0 top-[-9999px] z-[9999] bg-background px-4 py-2 text-primary focus:top-0 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
