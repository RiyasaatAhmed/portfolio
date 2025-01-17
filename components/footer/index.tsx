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
            href="https://github.com/RiyasaatAhmed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/riyasaatahmedrahul/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:riyasaatahmed24@gmail.com"
            className="hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
