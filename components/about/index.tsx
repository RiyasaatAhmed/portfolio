export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m a passionate developer focused on creating beautiful and
            functional web experiences. With expertise in modern technologies
            like React, TypeScript, and Next.js, I bring ideas to life through
            clean code and thoughtful design.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
              <div key={tech} className="p-4 bg-muted rounded-lg">
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
