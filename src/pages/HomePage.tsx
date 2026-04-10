import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { FeaturedArticle } from '@/components/blog/FeaturedArticle'
import { articles } from '@/data/articles'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const categories = ['全部', '技术', '设计', '思考'] as const

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('全部')
  const featured = articles.find((a) => a.featured)
  const otherArticles = articles.filter((a) => !a.featured)
  const filtered =
    activeCategory === '全部'
      ? otherArticles
      : otherArticles.filter((a) => a.category === activeCategory)

  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="hero-section pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ color: 'hsl(var(--hero-foreground))' }}
          >
            探索技术与创意的交汇点
          </h1>
          <p className="hero-text-muted text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in stagger-2">
            记录前端开发、设计思考与技术洞察。在这里，每一篇文章都是一次深度探索。
          </p>
          <div className="opacity-0 animate-fade-in stagger-3">
            <a
              href="#articles"
              className={cn(buttonVariants({ variant: 'hero', size: 'lg' }), 'inline-flex items-center gap-2 no-underline')}
            >
              开始阅读
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16 relative z-10">
          <FeaturedArticle article={featured} />
        </section>
      )}

      {/* Article list */}
      <section id="articles" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-foreground">最新文章</h2>
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={activeCategory === cat ? 'default' : 'secondary'}
                className={cn(
                  'cursor-pointer transition-colors',
                  activeCategory === cat
                    ? ''
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <ArticleCard
              key={article.id}
              article={article}
              className={cn('opacity-0 animate-fade-in-up', `stagger-${i + 1}`)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">暂无该分类下的文章</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            想了解更多？
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            了解这个博客背后的故事，以及我对技术与设计的思考。
          </p>
          <Link to="/about" className={buttonVariants({ variant: 'default' })}>
            关于我
          </Link>
        </div>
      </section>
    </div>
  )
}
