import HeavyStaticContent from '@/components/HeavyStaticContent';
import DynamicContent from '@/components/DynamicContent';

// PPRを有効にする
export const experimental_ppr = true;
// 注意: dynamic = 'force-dynamic' は使用しない（PPRの静的レンダリング効果を保持するため）

export default function HomePage() {
  // 静的部分なので動的関数は呼び出さない
  // const requestTime = new Date().toISOString(); // これも静的になるよう削除

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
              <p className="text-xs text-gray-500 mt-1">
                静的部分: ビルド時に事前レンダリング
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
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* 左カラム: 説明と動的コンテンツ */}
          <div className="space-y-8">
            {/* 説明セクション（静的） */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">PPRの仕組み</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">静的部分（右の重いコンテンツ + この説明）</h3>
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

            {/* パフォーマンス情報（静的） */}
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 mb-2">🚀 PPRのメリット</h3>
              <p className="text-yellow-700 text-sm">
                この説明部分と右側の重いコンテンツは**即座に表示**されます。
                動的部分の読み込み中でもユーザーはコンテンツを閲覧できます。
              </p>
            </div>

            {/* 動的コンテンツ（Suspenseで囲まれているため動的） */}
            <DynamicContent />
          </div>

          {/* 右カラム: 静的コンテンツ（事前レンダリング） */}
          <div className="space-y-8">
            <div className="sticky top-8">
              <HeavyStaticContent />
            </div>
          </div>
        </div>
      </main>

      {/* フッター（静的） */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Next.js v15 PPR Demo - パフォーマンス比較用</p>
        </div>
      </footer>
    </div>
  );
}
