import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { DownArrow } from "./down-arrow";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 grid-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left space-y-8">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 animate-gradient">
              Creative Developer & Designer
            </h1>
            <p className="text-xl text-muted-foreground">
              Crafting beautiful digital experiences with modern technologies
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative mx-auto">
              <div className="absolute inset-0 rounded-full animate-[spin_10s_linear_infinite]">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full blur-lg opacity-70"></div>
              </div>
              <div className="absolute inset-0 rounded-full animate-[spin_15s_linear_infinite] rotate-180">
                <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-50"></div>
              </div>
              <div className="group relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 animate-gradient p-[1px]">
                  <div className="w-full h-full rounded-full bg-background">
                    <Image
                      src={"/images/profile/black-dp.jpg"}
                      alt="Profile Photo"
                      width={400}
                      height={400}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DownArrow />
      </div>
    </section>
  );
}
