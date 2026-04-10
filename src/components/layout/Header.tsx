import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于' },
]

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg transition-shadow duration-300",
        isScrolled ? "shadow-sm border-b border-border" : "border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            墨韵笔记
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </nav>

          <div className="flex md:hidden items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block py-2 px-2 text-sm font-medium rounded-md transition-colors",
                  isActive(item.path)
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
