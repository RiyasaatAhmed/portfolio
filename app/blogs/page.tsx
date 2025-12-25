
import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';
import { Container } from '@/components/container';
import { Title } from '@/components/title';
import { MagicCard } from '@/components/magicui/magic-card';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Insights & Tutorials',
  description: 'Read my latest thoughts on React, Next.js, and web development.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Container className="pt-32 pb-20 min-h-screen">
      <Title title="Posts" />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            href={`/blogs/${post.slug}`} 
            key={post.slug}
            className="block h-full"
            aria-label={`Read article: ${post.metadata.title}`}
          >
            <MagicCard className="flex flex-col justify-between h-full p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20 group">
              <div className="space-y-4">
                <time 
                  dateTime={post.metadata.publishedAt} 
                  className="text-sm text-muted-foreground font-mono"
                >
                  {post.metadata.publishedAt}
                </time>
                
                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {post.metadata.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.metadata.summary}
                </p>
              </div>
            </MagicCard>
          </Link>
        ))}
      </div>
    </Container>
  );
}
