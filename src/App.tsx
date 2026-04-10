import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/pages/HomePage'
import { ArticlePage } from '@/pages/ArticlePage'
import { AboutPage } from '@/pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
