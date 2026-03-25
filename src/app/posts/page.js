import Link from "next/link";
import { getPosts } from "@/lib/microcms";

export default async function PostsPage() {
  const data = await getPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">記事一覧</h1>

      <ul className="space-y-4">
        {data.contents.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <h2 className="text-xl font-semibold mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500">
                  記事を見る →
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}