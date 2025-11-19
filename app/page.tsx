import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          HaruStudio Blog
        </h1>
        <p className="text-lg text-light-text/70 dark:text-dark-text/70 max-w-2xl">
          自作キーボード、ガジェット、クリエイティブについて発信しています。
          ZMKファームウェア生成ツールの開発も進行中。
        </p>
      </section>

      {/* Posts Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">最新の記事</h2>

        {posts.length === 0 ? (
          <p className="text-light-text/60 dark:text-dark-text/60">
            まだ記事がありません。
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
