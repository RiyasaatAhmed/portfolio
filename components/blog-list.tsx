"use client";

import { motion } from "motion/react";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { MagicCard } from '@/components/magicui/magic-card';
import type { BlogPost } from '@/lib/mdx';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post) => (
        <motion.div key={post.slug} variants={item} className="h-full">
          <Link 
            href={`/blogs/${post.slug}`} 
            className="block h-full"
            aria-label={`Read article: ${post.metadata.title}`}
          >
            <MagicCard className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-transparent/5 group overflow-hidden">
              {post.metadata.image && (
                <div className="relative w-full h-56 overflow-hidden">
                   <Image 
                      src={post.metadata.image} 
                      alt={post.metadata.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
              )}
              
              <div className="flex flex-col flex-grow p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <time dateTime={post.metadata.publishedAt} className="font-mono">
                    {post.metadata.publishedAt}
                  </time>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.metadata.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                  {post.metadata.summary}
                </p>

                <div className="pt-4 flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </MagicCard>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
