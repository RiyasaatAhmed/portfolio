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
      tagline: "A performance-first, accessible developer portfolio built with Next.js.",
      overview: "This portfolio is intentionally built as a production-grade web application rather than a static resume. It serves as a living case study of how I approach frontend engineering—balancing performance, accessibility, scalability, and visual polish. Every interaction, animation, and layout decision reflects real-world constraints and best practices used in modern SaaS products.",
      challenge: "The main challenge was delivering a visually engaging experience without sacrificing performance or accessibility. Motion-heavy interfaces often introduce layout shifts, excessive re-renders, or CPU bottlenecks, while custom UI components can easily fall short of accessibility standards if not designed carefully.",
      solution: "I used Next.js to leverage server-side rendering and static generation for fast initial loads, strong SEO, and predictable performance. Animations were implemented with Framer Motion using hardware-accelerated transforms to maintain smooth 60fps interactions without layout thrashing. Accessibility was treated as a core requirement from the start, with semantic HTML, proper ARIA roles, keyboard navigation, and continuous auditing to ensure screen reader compatibility and WCAG compliance.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui"
      ],
      features: [
        "Dynamic, file-based case study routing",
        "Consistent 100 Lighthouse scores across performance, accessibility, and SEO",
        "Fully responsive layouts with keyboard and screen reader support",
        "System-aware dark and light mode with persistent user preference",
        "Reusable interactive UI components inspired by modern SaaS design patterns"
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
    description: "Welcome to Xenowulf, where we don't just build servers and workstations — we engineer gateways to the future of artificial intelligence.",
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
