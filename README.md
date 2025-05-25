# Next.js v15 PPR (Partial Pre-rendering) Demo

このアプリケーションは、Next.js v15の新機能であるPPR（Partial Pre-rendering）の効果を体感できるデモアプリです。

## 🚀 PPRの特徴

PPRは静的部分と動的部分を分離し、以下の利点を提供します：

- **静的部分**: ビルド時に事前レンダリングされ、即座に表示
- **動的部分**: リクエスト時にサーバーでレンダリングされ、Suspenseでストリーミング
- **体感パフォーマンス**: 重い静的コンテンツがあっても、ユーザーは待機不要

## 📁 プロジェクト構造

```
src/
├── app/
│   └── page.tsx           # PPRが有効なメインページ
├── components/
│   ├── HeavyStaticContent.tsx  # 重い静的コンテンツ
│   └── DynamicContent.tsx      # 動的コンテンツ（Suspense使用）
```

## 🛠 技術スタック

- **Next.js**: v15.x (PPR有効)
- **React**: v18.x
- **TypeScript**: v5.x
- **Tailwind CSS**: v3.x
- **ESLint**: v8.x

## 🏃‍♂️ 開発サーバーの起動

```bash
npm install
npm run dev
```

http://localhost:3000 でアプリケーションが起動します。

## 🔬 パフォーマンス体感のポイント

1. **初回アクセス**: 重い静的コンテンツが即座に表示される
2. **動的部分**: ユーザー情報が3秒後にストリーミングされる
3. **体感速度**: 静的部分を見ながら動的部分の読み込みを待てる

## 📊 v14 Streaming SSRとの比較

同じディレクトリの `nextjs14-streaming-demo` と比較することで、PPRの効果を実感できます：

- **PPR**: 静的部分が即座に表示される
- **Streaming SSR**: 全コンテンツの準備が完了してから表示開始

## 🔧 設定

`next.config.js` でPPRを有効化：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
```

`page.tsx` でページ単位のPPR有効化：

```typescript
export const experimental_ppr = true;
```

## 📝 注意事項

- PPRは実験的機能のため、本番環境での使用は慎重に検討してください
- 開発環境では効果が分かりにくい場合があります（本番ビルドで確認推奨）
- 静的部分と動的部分の分離設計が重要です
