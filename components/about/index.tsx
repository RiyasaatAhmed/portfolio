export function About() {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Frontend developer with 4+ years of remote experience delivering
            scalable, high-performance web applications for US and EU companies.
            Skilled in TypeScript, React, and Next.js, with a focus on clean,
            user-centric solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["TypeScript", "React", "Next.js"].map((tech) => (
              <div
                key={tech}
                className="p-4 bg-muted rounded-lg grid-background"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
