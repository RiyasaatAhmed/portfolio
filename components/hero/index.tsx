import { Github, Linkedin, Video, FileText } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import HireMe from "./hire-me";
import { StackOverflowIcon } from "../icons/stack-over-flow";
import {
  CV_URL,
  GITHUB_URL,
  INTRO_VIDEO_URL,
  LINKEDIN_URL,
  STACK_OVERFLOW_URL,
} from "@/constants/urls";
import { Text } from "./text";
import { Magnet } from "../ui/magnet";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 grid-background container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-8">
          <Text />
          <p className="text-xl md:text-2xl text-muted-foreground">
            Senior Frontend Developer specializing in React.js, Next.js and
            modern web technologies.
          </p>

          <Magnet padding={5} disabled={false} magnetStrength={5}>
            <HireMe />
          </Magnet>

          <div className="flex justify-center md:justify-start gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                target="_blank"
                href={GITHUB_URL}
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link
                target="_blank"
                href={LINKEDIN_URL}
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                target="_blank"
                href={STACK_OVERFLOW_URL}
                aria-label="Stack Overflow Profile (opens in new tab)"
              >
                <StackOverflowIcon className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                target="_blank"
                href={INTRO_VIDEO_URL}
                aria-label="Intro Video (opens in new tab)"
              >
                <Video className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                target="_blank"
                href={CV_URL}
                aria-label="View Resume (opens in new tab)"
              >
                <FileText className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative mx-auto">
            <div className="absolute inset-0 rounded-full animate-[spin_10s_linear_infinite] motion-reduce:animate-none">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full blur-lg opacity-70"></div>
            </div>
            <div className="absolute inset-0 rounded-full animate-[spin_15s_linear_infinite] motion-reduce:animate-none rotate-180">
              <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-50"></div>
            </div>
            <div className="group relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 animate-gradient p-[1px]">
                <div className="w-full h-full rounded-full bg-background">
                  <Image
                    src={"/images/hero.jpg"}
                    alt="Riyasaat Ahmed Profile"
                    width={400}
                    height={400}
                    className="rounded-full w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="/images/hero-blur.jpg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
