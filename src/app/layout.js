import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "技術ブログ",
  description: "Next.js × microCMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {/* ヘッダー */}
        <header className="border-b p-4 mb-6">
          <div className="max-w-3xl mx-auto flex justify-between">
            <h1 className="font-bold text-xl">
              <Link href="/">技術ブログ</Link>
            </h1>
            <nav className="space-x-4">
              <Link href="/" className="text-blue-500">
                Home
              </Link>
              <Link href="/posts" className="text-blue-500">
                記事一覧
              </Link>
            </nav>
          </div>
        </header>

        {/* ページ内容 */}
        <main>{children}</main>

        {/* フッター */}
        <footer className="border-t p-4 mt-10 text-center text-sm text-gray-500">
          © 2026 技術ブログ
        </footer>
      </body>
    </html>
  );
}