import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">墨韵笔记</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              探索技术与创意的交汇点。记录前端开发、设计思考与技术洞察。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">导航</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  关于
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">分类</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">技术</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">设计</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">思考</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 墨韵笔记. 用心记录每一份技术感悟.
          </p>
        </div>
      </div>
    </footer>
  )
}
