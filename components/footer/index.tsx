import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants/urls";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 border-t bg-background/50">
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
          <Link href={EMAIL_URL} className="hover:underline" aria-label="Send Email">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
