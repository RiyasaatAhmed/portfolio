
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import { Container } from '@/components/container';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.metadata.title} | Riyasaat details`,
    description: post.metadata.summary,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      type: 'article',
      publishedTime: post.metadata.publishedAt,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const options = {
    theme: 'github-dark',
    keepBackground: true,
  };

  return (
    <Container className="pt-32 pb-20 min-h-screen">
      <Link
        href="/blogs"
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        aria-label="Back to blog posts"
      >
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
        Back to Blogs
      </Link>

      <article className="prose dark:prose-invert prose-lg max-w-none">
        <div className="mb-10 text-center">
          <time className="text-muted-foreground text-sm uppercase tracking-wider" dateTime={post.metadata.publishedAt}>
            {post.metadata.publishedAt}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            {post.metadata.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {post.metadata.summary}
          </p>
        </div>
        
        <div className="mt-12 bg-card/30 p-8 rounded-2xl border border-border/50 shadow-sm backdrop-blur-sm">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  [rehypePrettyCode, options],
                ],
              },
            }}
            components={{
               // We can add custom components here if needed
            }}
          />
        </div>
      </article>
      
      <div className="mt-20 pt-10 border-t flex justify-center">
        <Link 
          href="/blogs" 
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Browse more articles"
        >
          Browse more articles
        </Link>
      </div>
    </Container>
  );
}
