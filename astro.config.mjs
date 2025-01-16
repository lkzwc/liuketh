import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.liuketh.cn',
  build: {
    inlineStylesheets: 'never'
  },
  markdown: {
    gfm: false
  },
  image: {
    service: squooshImageService(),
    domains: ['assets.website-files.com'],
    format: ['webp', 'avif', 'png', 'jpg'],
  },
  integrations: [
    react(),
    sitemap(),
    mdx({
      optimize: {
        // 防止优化器处理 `h1` 元素
        // 这些元素将被视为自定义组件
        customComponentNames: ['table'],
      },
    }),
    tailwind()
  ],
  devToolbar: {
    enabled: false
  },
  redirects: {
    // '/hot/[...slug]': '/hotcard',
  }
});