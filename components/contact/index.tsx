import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Title } from "../title";
import Link from "next/link";
import { EMAIL_URL } from "@/constants/urls";

export function Contact() {
  return (
    <section id="contact" className="py-20 grid-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <Title title="Get in Touch" />
          <p className="text-lg text-muted-foreground mb-8">
            Interested in working together? Let&apos;s connect and discuss your
            next project.
          </p>
          <Link href={EMAIL_URL}>
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
