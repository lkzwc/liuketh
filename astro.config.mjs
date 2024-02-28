import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://liuketh.cn',
  build: {
    inlineStylesheets: 'never'
  },
  markdown: {
    gfm: false
  },
  image: {
    service: squooshImageService()
  },
  integrations: [tailwind({
    // 示例：在每个页面上禁用注入基本的`base.css`导入。
    // 如果你需要定义或导入你自己的 "base.css"，这很有用。
  }), mdx(), sitemap()]
});