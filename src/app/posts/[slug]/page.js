import { getSlugs, getPostBySlug } from "@/lib/microcms";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return await getSlugs();
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        {post.title}
      </h1>
        {post.eyecatch && (
          <Image
            src={post.eyecatch.url}
            alt={post.title}
            width={800}
            height={500}
            className="w-full mb-6 rounded"
          />
        )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}