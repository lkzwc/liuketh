# 项目说明

流客科技（liuketh.cn）营销官网：Astro 5 + React + Tailwind，静态生成。内容在 `src/content/` 下四个集合（news / hotcard / ukcard / wifi），均为 MDX，frontmatter schema 定义在 `src/content/config.ts`（必填：title、pubDate、description、cover、coverAlt、author、image{url,alt}、tags）。

## 写营销/博客文章时（必读）

1. **先读 `docs/deai-style-guide.md` 并严格遵守**——里面有 AI 检测识别因素、本站写作规则和发布前自检清单，目的是避免文章带 AI 腔。
2. 封面图放 `src/content/news/_image/`，可用 sharp 程序化生成（1200×630 webp，参考现有封面风格）。
3. 文章结尾保留转化入口：微信 liuketh000 / 电话 15556355573，适当内链相关文章和 `/agent`。
4. 新文章放入 `src/content/news/` 后会自动进 /news 列表和 sitemap。

## 验证

改动内容或页面后运行 `npm run build`（会先跑 astro check 类型检查）确认无错误。

## 已知问题备忘

- `src/pages/blog/[...page].astro` 取的是 hotcard 数据却传了 `path="/news"`，列表链接指向错误地址，待修复。
- `src/layouts/BaseLayout.astro` 中各搜索引擎站点验证 meta 仍是占位符 `XXXXXXXXXX`。
