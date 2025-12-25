import {
  MAX_ECOMMERCE,
  MZ_TECH_CORP_URL,
  ON_CALL_PUBLIC_ADJUSTERS,
  POOL_OFFICE_MANAGER_URL,
  PORTFOLIO,
  PORTFOLIO_GITHUB,
  SPEED_DIVISION,
  XENO_WULF,
} from "./urls";

export interface Project {
  thumbnail: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  slug?: string;
  details?: {
    tagline: string;
    overview: string;
    challenge: string;
    solution: string;
    technologies: string[];
    features: string[];
  };
}

export const projects: Project[] = [
  {
    thumbnail: "/images/projects/portfolio.jpg",
    title: "Riyasaat's Portfolio",
    description:
      "Solution Oriented Developer, Crafting beautiful digital experiences with modern technologies",
    liveUrl: PORTFOLIO,
    githubUrl: PORTFOLIO_GITHUB,
    slug: "portfolio",
    details: {
      tagline: "A production-grade, accessible developer portfolio built with Next.js App Router, Framer Motion, and MDX.",
      overview: "This portfolio is more than just a resume, it's a comprehensive demonstration of modern frontend engineering. It balances high-end visual design with rigorous performance, accessibility, and SEO standards. Built on the Next.js App Router, it features a fully custom MDX blog system, dynamic case studies, and a highly interactive user interface, serving as a real-world example of scalable web application architecture.",
      challenge: "The primary challenge was integrating complex, motion-heavy features like 3D skills visualization and fluid page transitions without compromising on Core Web Vitals or accessibility. Additionally, building a custom blog with syntax highlighting and ensuring the site ranks for competitive developer keywords (SEO) required a deep dive into Next.js metadata API and semantic HTML structure.",
      solution: "I utilized React Server Components (RSC) to keep the initial bundle size low while delivering rich interactive experiences via Client Components. Framer Motion and Magic UI were used for hardware-accelerated animations. For content, I built a custom file-based CMS using MDX and `rehype-pretty-code` for server-side syntax highlighting. I also implemented a robust SEO strategy including dynamic sitemaps, Open Graph images, and JSON-LD structured data.",
      technologies: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "MDX & Gray Matter",
        "Shadcn/ui & Magic UI",
        "Lucide React"
      ],
      features: [
        "Custom MDX Blog with syntax highlighting",
        "Dynamic, file-based Case Study system",
        "Performance-optimized animations (Framer Motion)",
        "3D Skills Cloud visualization",
        "System-aware Dark/Light mode",
        "Advanced SEO (Sitemap, Robots.txt, Metadata)",
        "Fully accessible components (WCAG compliant)"
      ],
    },
  },
  {
    thumbnail: "/images/projects/pool-office-manager.jpg",
    title: "Pool Office Manager",
    description: "Pool Office Manager (POM), the only pool service management software built specifically for seasonal pool service companies.",
    liveUrl: POOL_OFFICE_MANAGER_URL,
    slug: "pool-office-manager",
  },
  {
    thumbnail: "/images/projects/mz-tech.jpg",
    title: "MzTech Software Corporation",
    description: "MzTech is a team of accomplished engineers and tech professionals who are committed to utilizing state-of-the-art resources to help clients acquire their digital aspirations.",
    liveUrl: MZ_TECH_CORP_URL,
  },
  {
    thumbnail: "/images/projects/speed-division.jpg",
    title: "Speed Division",
    description: "Performance car parts for all makes and models.",
    liveUrl: SPEED_DIVISION,
  },
  {
    thumbnail: "/images/projects/xeno-wulf.jpg",
    title: "Xeno Wulf",
    description: "Welcome to Xenowulf, where we don't just build servers and workstations, we engineer gateways to the future of artificial intelligence.",
    liveUrl: XENO_WULF,
  },
  {
    thumbnail: "/images/projects/max-ecom.jpg",
    title: "Max E-Commerce",
    description: "Our team at MAX E-Commerce is dedicated to building a platform that drives you forward, works for you as you grow, and never stands in your way.",
    liveUrl: MAX_ECOMMERCE,
  },
  {
    thumbnail: "/images/projects/on-call.jpg",
    title: "On Call Public Adjusters",
    description: "We are a team of insurance professionals with one goal in mind: To get you fully compensated, and to do that with integrity.",
    liveUrl: ON_CALL_PUBLIC_ADJUSTERS,
  },
];
