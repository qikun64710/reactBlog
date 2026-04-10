import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { articles, categoryCovers } from '@/data/articles'
import { cn } from '@/lib/utils'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-3xl font-bold text-foreground mb-4">文章未找到</h1>
          <p className="text-muted-foreground mb-8">
            抱歉，你访问的文章不存在。
          </p>
          <Button variant="default" onClick={() => navigate('/')}>
            返回首页
          </Button>
        </div>
      </div>
    )
  }

  const related = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 2)

  return (
    <div className="fade-in">
      {/* Cover */}
      <div
        className={cn(
          'pt-24 pb-12 md:pt-32 md:pb-16',
          categoryCovers[article.category]
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            返回
          </Button>

          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-0">
            {article.category}
          </Badge>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ color: 'hsl(var(--primary-foreground))' }}
          >
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime} 分钟阅读
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12">
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pb-16">
          <h2 className="text-xl font-bold text-foreground mb-6">相关文章</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}

      {/* Back to home */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pb-16 text-center">
        <Link to="/" className={buttonVariants({ variant: 'outline' })}>
          查看所有文章
        </Link>
      </div>
    </div>
  )
}
