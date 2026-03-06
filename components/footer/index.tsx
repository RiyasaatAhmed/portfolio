import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants/urls";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-8 bg-background/50 border-t overflow-hidden">
      <div className="absolute top-0 left-1/2 w-full max-w-7xl -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/5 dark:via-primary/10 to-transparent" />
      <div className="absolute top-0 left-1/2 w-full max-w-3xl -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/10 dark:via-primary/20 to-transparent" />
      <div className="absolute top-0 left-1/2 w-3/4 max-w-4xl -translate-x-1/2 h-[40px] bg-primary/[0.02] dark:bg-primary/[0.03] blur-[100px] -translate-y-1/2 pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 text-center text-primary">
        <p>© {new Date().getFullYear()} Riyasaat Ahmed. All rights reserved.</p>
        <p className="mt-2">
          Built with <span className="text-red-500">♥</span> using React,
          Next.js, and TypeScript.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href={GITHUB_URL}
            target="_blank"
            className="hover:underline"
            aria-label="Visit GitHub Profile"
          >
            GitHub
          </Link>
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            className="hover:underline"
            aria-label="Visit LinkedIn Profile"
          >
            LinkedIn
          </Link>
          <Link href={EMAIL_URL} className="hover:underline" aria-label="Contact via Email">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
