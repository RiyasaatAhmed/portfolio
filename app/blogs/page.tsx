import { getBlogPosts } from '@/lib/mdx';
import { Container } from '@/components/container';
import { SparklesText } from '@/components/magicui/sparkles-text';
import type { Metadata } from 'next';
import { BlogList } from '@/components/blog-list';

export const metadata: Metadata = {
  title: 'Blog | Insights & Tutorials',
  description: 'Read my latest thoughts on React, Next.js, and web development.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Container className="pt-32 pb-20 min-h-screen">
      <div className="flex flex-col items-center mb-16 text-center space-y-4">
        <SparklesText text="Insights & Tutorials" className="text-4xl md:text-5xl" />
        <p className="text-muted-foreground max-w-[600px] text-lg">
          Deep dives into modern web development, engineering practices, and my personal journey.
        </p>
      </div>

      <BlogList posts={posts} />
    </Container>
  );
}
