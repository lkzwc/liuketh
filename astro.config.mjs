import { defineConfig } from 'astro/config';
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
  assets: {
    domains: ['assets.website-files.com'],
    formats: ['webp', 'avif', 'png', 'jpg']
  },
  integrations: [
    react({
      include: ['**/*.tsx', '**/*.jsx']
    }),
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
  vite: {
    ssr: {
      noExternal: ['@astrojs/*']
    },
    server: {
      fs: {
        strict: true
      }
    },
    build: {
      charset: 'utf8'
    }
  },
  redirects: {
    // '/hot/[...slug]': '/hotcard',
  }
});