import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Title } from "../title";
import Link from "next/link";
import { EMAIL_URL } from "@/constants/urls";
import { Container } from "../container";

export function Contact() {
  return (
    <Container id="contact" className="grid-background">
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
    </Container>
  );
}
