import Link from "next/link";
import { getPosts } from "@/lib/microcms";
import Image from "next/image";

export default async function Home() {
  const data = await getPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-4">
        技術ブログ
      </h1>

      {/* 説明 */}
      <p className="text-gray-600 mb-8">
        Next.js × microCMSで作ったブログです
      </p>

      {/* 記事一覧 */}
      <ul className="space-y-4">
        {data.contents.map((post) => (
            <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
                <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                
                {/* 画像 */}
                {post.eyecatch && (
                    <Image
                    src={post.eyecatch.url}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    />
                )}

                {/* テキスト */}
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                    {post.title}
                    </h2>
                    <p className="text-gray-500">
                    記事を見る →
                    </p>
                </div>
                </div>
            </Link>
            </li>
        ))}
      </ul>
    </main>
  );
}