import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { type Article } from '@/data/articles'

interface FeaturedArticleProps {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <Link to={`/article/${article.slug}`} className="group block">
      <article className="card-interactive rounded-xl bg-card overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
            <img
              src="/images/hero.png"
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Badge>{article.category}</Badge>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
              {article.title}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {article.readTime} 分钟阅读
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                阅读全文
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
