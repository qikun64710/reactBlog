import { Code2, Palette, Lightbulb, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const interests = [
  {
    icon: Code2,
    title: '前端开发',
    description: '专注于 React 生态系统，热衷于探索前端工程化、性能优化和现代 Web 技术。',
  },
  {
    icon: Palette,
    title: '设计系统',
    description: '相信好的设计来自系统性的思考。致力于构建可扩展、可维护的设计体系。',
  },
  {
    icon: Lightbulb,
    title: '技术思考',
    description: '关注行业趋势和技术演进，思考技术如何更好地服务于产品和用户。',
  },
]

export function AboutPage() {
  return (
    <div className="fade-in">
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
            关于墨韵笔记
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in stagger-2">
            一个关于前端开发、设计与思考的个人博客
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
          <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
            <img
              src="/images/hero.png"
              alt="博客作者"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">你好，欢迎来到我的博客</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                我是一名前端工程师，对技术与设计的交叉领域有着浓厚的兴趣。墨韵笔记是我记录技术学习、设计思考和行业观察的地方。
              </p>
              <p>
                在这里，你可以找到关于 React、TypeScript、CSS 等前端技术的深度文章，也可以读到关于设计系统、用户体验和软件工程的思考。
              </p>
              <p>
                我相信，好的技术文章应该像好的代码一样——清晰、简洁、有深度。每一篇文章都经过仔细的构思和打磨，希望能为你带来启发。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12">
        <h2 className="text-2xl font-bold text-foreground mb-8">关注领域</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {interests.map((item) => (
            <div
              key={item.title}
              className="card-interactive rounded-lg bg-card p-6"
            >
              <item.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12 pb-16">
        <div className="bg-secondary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-secondary-foreground mb-3">
            开始阅读
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            浏览最新的文章，发现感兴趣的话题。
          </p>
          <Link to="/" className={cn(buttonVariants({ variant: 'default' }), 'inline-flex items-center gap-2')}>
            查看文章
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
