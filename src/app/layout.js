import Link from "next/link";
// Tailwind.cssの設定をインポート
import "./globals.css";
import { Inconsolata } from "next/font/google";

// googleフォントを有効化
const fnt = Inconsolata({ subsets: ["latin"] });

// メタデータを定義
export const metadata = {
  title: "Reading Recorder",
  description: "自分が読んだ本の記録を残すts目のアプリ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={fnt.className}>
        <h1 className="text-4xl text-indigo-800 font-bold my-2">
          本の検索アプリ作ってみたよ
        </h1>
        <ul className="flex bg-blue-600 mb-4 pl-2">
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/">
              Home
            </Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/books">
              Search
            </Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <a
              className="no-underline text-blue-300"
              href="https://wings.msn.to/"
              target="_blank"
            >
              Support
            </a>
          </li>
        </ul>
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
