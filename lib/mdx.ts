
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blogs');

export type BlogPost = {
  metadata: BlogPostMetadata;
  slug: string;
  content: string;
};

export type BlogPostMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDirectory);

  const posts = files
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const slug = path.basename(file, path.extname(file));

      return {
        metadata: data as BlogPostMetadata,
        slug,
        content,
      };
    });

  // Sort by date descending
  return posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
