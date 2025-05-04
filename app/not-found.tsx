// app/not-found.tsx
export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">404 - ページが見つかりません</h1>
          <p className="text-lg">指定されたページは存在しません。</p>
        </div>
      </div>
    );
  }