export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: '技术' | '设计' | '思考'
  tags: string[]
  readTime: number
  featured?: boolean
}

export const categoryCovers: Record<string, string> = {
  '技术': 'cover-tech',
  '设计': 'cover-design',
  '思考': 'cover-thoughts',
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'react-server-components',
    title: '深入理解 React Server Components',
    excerpt: '探索 React Server Components 如何重新定义前端架构，实现服务端与客户端组件的无缝协作，带来更好的性能和开发体验。',
    date: '2026-04-08',
    category: '技术',
    tags: ['React', 'RSC', '前端架构'],
    readTime: 12,
    featured: true,
    content: `<h2>什么是 React Server Components？</h2>
<p>React Server Components（RSC）是 React 团队推出的一项革命性特性。它允许开发者编写在服务端运行的 React 组件，这些组件可以直接访问数据库、文件系统等后端资源，同时将渲染结果以高效的流式格式发送到客户端。</p>
<p>与传统的服务端渲染（SSR）不同，RSC 不会将组件的 JavaScript 代码发送到浏览器。这意味着服务端组件的依赖（如 Markdown 解析器、语法高亮库）不会增加客户端的 bundle 大小。</p>

<h2>核心概念</h2>
<h3>服务端组件 vs 客户端组件</h3>
<p>在 RSC 架构中，组件分为两种类型。服务端组件默认在服务器上执行，可以使用 <code>async/await</code> 直接获取数据。客户端组件则通过 <code>'use client'</code> 指令标记，在浏览器中运行，可以使用 state、effects 等交互特性。</p>
<p>关键在于理解：服务端组件可以导入和渲染客户端组件，但客户端组件不能导入服务端组件。不过，客户端组件可以通过 <code>children</code> 属性接收服务端组件作为内容。</p>

<h3>数据获取的范式转变</h3>
<p>RSC 改变了数据获取的方式。不再需要 <code>useEffect</code> 加载数据或使用复杂的状态管理库来缓存服务端数据。每个组件可以独立获取所需的数据，React 会自动处理请求的去重和并行化。</p>

<h2>实际应用场景</h2>
<p>RSC 特别适合内容密集型应用，如博客、文档站点和电商平台。在这些场景中，大部分页面内容是静态的，只有少量交互元素需要在客户端运行。通过将静态内容移至服务端组件，可以显著减小 JavaScript bundle 大小，提升首屏加载速度。</p>

<blockquote>RSC 不是 SSR 的替代品，而是对现有渲染策略的补充。两者可以结合使用，发挥各自的优势。</blockquote>

<h2>性能优势</h2>
<p>通过合理拆分服务端和客户端组件，RSC 能够带来显著的性能提升：减少 JavaScript bundle 大小、消除客户端数据获取的瀑布流、利用服务端的计算资源处理复杂逻辑。这些优化叠加在一起，可以为用户带来更流畅的浏览体验。</p>`,
  },
  {
    id: 2,
    slug: 'typescript-type-gymnastics',
    title: 'TypeScript 类型体操实战指南',
    excerpt: '从实际业务场景出发，深入学习 TypeScript 高级类型技巧，掌握条件类型、映射类型和模板字面量类型的实战应用。',
    date: '2026-04-02',
    category: '技术',
    tags: ['TypeScript', '类型系统', '前端'],
    readTime: 15,
    content: `<h2>为什么要学习高级类型？</h2>
<p>TypeScript 的类型系统是图灵完备的，这意味着你几乎可以在类型层面表达任何逻辑。掌握高级类型不仅能让你写出更安全的代码，还能创建更好的 API 接口设计，让使用者获得精确的类型提示和编译时错误检查。</p>

<h2>条件类型的威力</h2>
<p>条件类型是 TypeScript 类型系统中最强大的特性之一。它的语法类似于三元表达式：<code>T extends U ? X : Y</code>。配合 <code>infer</code> 关键字，可以从复杂类型中提取出需要的部分。</p>
<p>例如，我们可以创建一个工具类型，自动将函数的返回值从 Promise 中解包。这在处理异步函数的返回类型时非常有用，避免了到处写 <code>Awaited</code> 的麻烦。</p>

<h2>映射类型与键重映射</h2>
<p>映射类型让我们可以基于已有类型创建新类型。配合 TypeScript 4.1 引入的键重映射（Key Remapping），我们可以在遍历类型属性时修改键名。这在创建 getter/setter 工具类型或为 API 响应创建转换类型时特别有用。</p>

<h2>模板字面量类型</h2>
<p>模板字面量类型让 TypeScript 的类型系统具备了字符串操作能力。你可以使用它来约束特定格式的字符串、生成事件名称类型、或者创建类型安全的路由系统。结合联合类型的分布特性，模板字面量类型可以自动展开为所有可能的组合。</p>

<blockquote>类型体操的目标不是写出最复杂的类型，而是在合适的场景使用合适的类型工具，让代码更安全、API 更友好。</blockquote>

<h2>实战建议</h2>
<p>在实际项目中，不要为了炫技而过度使用高级类型。优先使用简单的类型注解，只在需要泛型约束、自动推导或复杂变换时才引入高级类型。保持类型的可读性和可维护性，是类型工程的核心原则。</p>`,
  },
  {
    id: 3,
    slug: 'design-system-at-scale',
    title: '构建可扩展的设计系统',
    excerpt: '从设计令牌到组件变体，深入探讨如何构建一个可维护、可扩展的设计系统，让团队协作更高效。',
    date: '2026-03-25',
    category: '设计',
    tags: ['设计系统', 'UI', '组件库'],
    readTime: 10,
    content: `<h2>设计系统不只是组件库</h2>
<p>很多团队将设计系统等同于一套 UI 组件库，但这只是冰山一角。一个完整的设计系统包括设计令牌（Design Tokens）、设计原则、交互模式、内容指南和品牌规范。组件库只是这些原则的代码实现。</p>

<h2>设计令牌：系统的基石</h2>
<p>设计令牌是设计决策的最小单位，包括颜色、字体、间距、阴影等基础值。通过将这些值抽象为令牌，我们实现了设计与实现的解耦。修改一个令牌就能影响整个系统的视觉表现，同时保持一致性。</p>
<p>好的令牌系统采用语义命名而非描述性命名。不用 <code>blue-500</code>，而用 <code>primary</code>；不用 <code>16px</code>，而用 <code>spacing-md</code>。这让令牌的用途自文档化，也让主题切换变得简单。</p>

<h2>组件变体设计</h2>
<p>设计组件 API 是设计系统中最具挑战性的部分。好的组件 API 应该简单直观，同时提供足够的灵活性。使用变体（Variants）而非大量 props 来控制组件的视觉表现，可以约束设计的可能性空间，防止设计偏离系统规范。</p>

<h2>文档与采用</h2>
<p>设计系统的成功不在于它有多完美，而在于多少人愿意使用它。投入精力编写清晰的文档、提供交互式示例、建立反馈渠道。让使用者参与设计系统的演进，才能确保它真正服务于团队的需求。</p>

<blockquote>最好的设计系统不是最强大的那个，而是团队最愿意使用的那个。</blockquote>`,
  },
  {
    id: 4,
    slug: 'web-performance-optimization',
    title: 'Web 性能优化实战手册',
    excerpt: '从核心指标到具体优化策略，全面梳理现代 Web 应用的性能优化方法论，让你的应用飞速运转。',
    date: '2026-03-18',
    category: '技术',
    tags: ['性能优化', 'Core Web Vitals', '前端'],
    readTime: 14,
    content: `<h2>性能指标：衡量用户体验</h2>
<p>Google 的 Core Web Vitals 定义了三个关键指标：LCP（最大内容渲染时间）衡量加载性能、INP（交互延迟）衡量交互响应性、CLS（累积布局偏移）衡量视觉稳定性。理解这些指标是优化的第一步。</p>

<h2>加载性能优化</h2>
<p>减小 JavaScript bundle 大小是最直接的优化手段。使用代码分割、Tree Shaking 和动态导入，确保用户只下载当前页面所需的代码。对于图片资源，使用现代格式（WebP/AVIF）和响应式图片技术。</p>
<p>服务端优化同样重要。启用 HTTP/2 或 HTTP/3、配置合理的缓存策略、使用 CDN 分发静态资源。这些基础设施层面的优化往往能带来最大的性能提升。</p>

<h2>运行时性能</h2>
<p>避免长任务阻塞主线程。将复杂计算移至 Web Worker，使用 <code>requestIdleCallback</code> 或 <code>scheduler.postTask</code> 调度非关键任务。虚拟列表技术可以大幅减少 DOM 节点数量，提升长列表的滚动性能。</p>

<h2>建立性能文化</h2>
<p>性能优化不是一次性工作，而是持续的实践。在 CI/CD 中集成性能监控，设置性能预算，定期分析真实用户数据（RUM）。让性能成为团队的共同关注点，而非某个人的责任。</p>`,
  },
  {
    id: 5,
    slug: 'ai-assisted-development',
    title: 'AI 时代的软件工程思考',
    excerpt: '当 AI 编程助手日渐成熟，软件工程师的角色将如何演变？探讨人机协作的最佳实践与未来展望。',
    date: '2026-03-10',
    category: '思考',
    tags: ['AI', '软件工程', '未来趋势'],
    readTime: 8,
    content: `<h2>AI 不会取代工程师</h2>
<p>AI 编程助手在代码生成、bug 修复和代码审查方面展现出了强大的能力。但软件工程的核心——理解业务需求、系统设计、架构决策和技术权衡——仍然需要人类工程师的判断力和创造力。</p>

<h2>人机协作的模式</h2>
<p>最有效的协作方式是将 AI 作为"增强器"而非"替代器"。让 AI 处理重复性的编码工作，工程师专注于架构设计、代码审查和业务逻辑。这种分工能显著提升开发效率，同时保持代码质量。</p>

<h2>需要培养的新技能</h2>
<p>在 AI 时代，"提问的能力"变得格外重要。清晰、准确地描述需求和约束，能让 AI 助手生成更好的代码。同时，代码审查能力也需要加强——不仅要能读懂代码，还要能评估 AI 生成代码的质量、安全性和可维护性。</p>

<blockquote>真正的竞争力不在于你能写多快的代码，而在于你能解决多复杂的问题。</blockquote>

<h2>展望未来</h2>
<p>AI 辅助开发正在快速发展。未来，工程师可能更多地扮演"系统架构师"和"质量守门人"的角色，而 AI 承担更多的实现细节。适应这种变化，培养高层次的系统思维和设计能力，是每位工程师应该做的准备。</p>`,
  },
  {
    id: 6,
    slug: 'modern-css-layout',
    title: '现代 CSS 布局完全指南',
    excerpt: '从 Flexbox 到 Grid，从 Container Queries 到 Subgrid，全面掌握现代 CSS 布局技术的核心概念与最佳实践。',
    date: '2026-03-01',
    category: '技术',
    tags: ['CSS', '布局', '前端'],
    readTime: 11,
    content: `<h2>布局技术的演进</h2>
<p>CSS 布局经历了从 float 到 flexbox，再到 grid 的演进。每一代技术都解决了特定的布局难题。如今，flexbox 和 grid 已经得到了广泛的浏览器支持，成为现代 Web 布局的两大基石。</p>

<h2>Flexbox：一维布局之王</h2>
<p>Flexbox 擅长一维布局——无论是水平排列还是垂直排列。理解 <code>flex-grow</code>、<code>flex-shrink</code> 和 <code>flex-basis</code> 这三个属性是掌握 flexbox 的关键。它们共同决定了弹性项目如何分配空间。</p>

<h2>Grid：二维布局的革命</h2>
<p>CSS Grid 让真正的二维布局成为可能。通过 <code>grid-template-columns</code>、<code>grid-template-rows</code> 和 <code>grid-template-areas</code>，你可以创建复杂的页面布局，而不需要嵌套多层容器。Subgrid 特性进一步增强了网格布局的能力。</p>

<h2>Container Queries：响应式设计的新篇章</h2>
<p>传统的媒体查询基于视口大小，而 Container Queries 让组件可以根据其容器的大小来调整样式。这是真正实现组件级响应式设计的关键技术，让组件可以在不同的上下文中自适应展示。</p>

<h2>选择合适的布局方式</h2>
<p>不要试图用一种技术解决所有布局问题。一维排列用 flexbox，二维网格用 grid，组件自适应用 container queries。灵活组合使用，才能写出简洁高效的布局代码。</p>`,
  },
]
