import Link from 'next/link'
import { PostMeta } from '@/lib/posts'
import { Calendar, Tag } from 'lucide-react'

interface PostCardProps {
  post: PostMeta
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group">
      <Link
        href={`/posts/${post.slug}`}
        className="block p-6 rounded-lg bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 border border-transparent hover:border-brand/30 transition-all duration-300"
      >
        <h2 className="text-xl font-semibold mb-3 group-hover:text-brand transition-colors">
          {post.title}
        </h2>

        <p className="text-light-text/70 dark:text-dark-text/70 mb-4 line-clamp-2 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-light-text/50 dark:text-dark-text/50">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>

          {post.tags.length > 0 && (
            <div className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <div className="flex gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-brand/10 text-brand"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}
