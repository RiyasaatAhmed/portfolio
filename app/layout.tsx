import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PORTFOLIO } from "@/constants/urls";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO),
  title: "Riyasaat Ahmed | Frontend Developer & React Expert",
  description:
    "Portfolio of Riyasaat Ahmed, a frontend developer with 5+ years of experience in building scalable, high-performance web solutions using TypeScript, React.js, and Next.js. Specializing in clean code, performance optimization, and Test-Driven Development.",
  openGraph: {
    title: "Riyasaat Ahmed | Frontend Developer & React Expert",
    description:
      "Portfolio of Riyasaat Ahmed, a frontend developer with 5+ years of experience in building scalable, high-performance web solutions using TypeScript, React.js, and Next.js. Specializing in clean code, performance optimization, and Test-Driven Development.",
    url: PORTFOLIO,
    siteName: "Riyasaat Ahmed Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Riyasaat Ahmed | Frontend Developer & React Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyasaat Ahmed | Frontend Developer & React Expert",
    description:
      "Portfolio of Riyasaat Ahmed, a frontend developer with 5+ years of experience in building scalable, high-performance web solutions using TypeScript, React.js, and Next.js. Specializing in clean code, performance optimization, and Test-Driven Development.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
