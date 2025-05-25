import HeavyStaticContent from '@/components/HeavyStaticContent';
import DynamicContent from '@/components/DynamicContent';

// PPRを有効にする
export const experimental_ppr = true;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Next.js v15 PPRデモ
              </h1>
              <p className="text-gray-600 mt-1">
                Partial Pre-rendering の効果を体感
              </p>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-green-800 font-semibold">PPR有効</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* 説明セクション */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">PPRの仕組み</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">静的部分（下の重いコンテンツ）</h3>
                <p className="text-blue-700 text-sm">
                  ビルド時に事前レンダリングされ、即座に表示されます。
                  重い計算処理が含まれていても、ユーザーは待機しません。
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2">動的部分（下のユーザー情報）</h3>
                <p className="text-purple-700 text-sm">
                  リクエスト時にサーバーでレンダリングされ、
                  Suspenseでストリーミングされます。
                </p>
              </div>
            </div>
          </div>

          {/* パフォーマンス情報 */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">🚀 パフォーマンスのポイント</h3>
            <p className="text-yellow-700 text-sm">
              静的部分は即座に表示され、動的部分の読み込み中でもユーザーはコンテンツを閲覧できます。
              これにより、体感的なパフォーマンスが大幅に向上します。
            </p>
          </div>

          {/* 静的コンテンツ */}
          <HeavyStaticContent />

          {/* 動的コンテンツ */}
          <DynamicContent />
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Next.js v15 PPR Demo - パフォーマンス比較用</p>
        </div>
      </footer>
    </div>
  );
}
