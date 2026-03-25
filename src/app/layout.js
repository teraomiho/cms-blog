import "./globals.css";

export const metadata = {
  title: "CMSブログ",
  description: "Next.js + microCMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}