import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants/urls";

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
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href={EMAIL_URL} className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
