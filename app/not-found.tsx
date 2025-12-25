"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { motion } from "motion/react";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="space-y-2 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Ghost className="w-24 h-24 text-muted-foreground/30 mb-4" />
          </motion.div>
          
          <SparklesText 
            text="404" 
            className="text-8xl font-black tracking-tighter sm:text-9xl"
            colors={{ first: "#A07CFE", second: "#FE8FB5" }}
          />

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed"
          >
            Oops! It seems like you've ventured into the void. The page you are looking for doesn't exist or has been moved.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center"
        >
          <Button size="lg" className="font-semibold text-base px-8 h-12 rounded-full transition-all hover:scale-105" asChild>
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
