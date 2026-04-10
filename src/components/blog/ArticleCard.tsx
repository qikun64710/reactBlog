import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { type Article, categoryCovers } from '@/data/articles'

interface ArticleCardProps {
  article: Article
  className?: string
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link
      to={`/article/${article.slug}`}
      className={cn("group block", className)}
    >
      <article className="card-interactive rounded-lg bg-card overflow-hidden h-full flex flex-col">
        <div className={cn(
          "aspect-[16/10] flex items-end p-5",
          categoryCovers[article.category]
        )}>
          <Badge variant="secondary" className="bg-card/90 text-card-foreground backdrop-blur-sm">
            {article.category}
          </Badge>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <time>{article.date}</time>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime} 分钟
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </article>
    </Link>
  )
}
