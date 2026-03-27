import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、削除された可能性があります。</p>

      <Link href="/">ホームに戻る</Link>
    </main>
  );
}