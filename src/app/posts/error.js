"use client";

export default function Error({ error, reset }) {
  return (
    <main style={{ padding: "20px" }}>
      <h2>エラーが発生しました</h2>
      <p>{error.message}</p>

      <button onClick={() => reset()}>
        再読み込み
      </button>
    </main>
  );
}