import LinkedBookDetails from '@/components/LinkedBookDetails';
import { getAllReviews } from '@/lib/getter';

// 常に最新の情報を取得
export const dynamic = 'force-dynamic';
export default async function Home() {
  // 全てのレビュー情報を取得
  const reviews = await getAllReviews();
  console.log(reviews);
  return (
    <>
      {/* 取得した情報をもとにリストを生成 */}
      {reviews.map((b, i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}