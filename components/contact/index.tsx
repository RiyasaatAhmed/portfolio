import { Mail } from "lucide-react";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 grid-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in working together? Let&apos;s connect and discuss your
            next project.
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}
