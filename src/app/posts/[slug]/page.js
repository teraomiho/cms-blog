import { getSlugs, getPostBySlug } from "@/lib/microcms";
import { notFound } from "next/navigation";

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
      <h1>{post.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}