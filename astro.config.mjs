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
  // 开启压缩
  compressHTML: true,
  markdown: {
    gfm: false
  },
  // 图片优化
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  assets: {
    domains: ['assets.website-files.com'],
    formats: ['webp', 'avif', 'png', 'jpg']
  },
  integrations: [
    react({
      include: ['**/*.tsx', '**/*.jsx']
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      serialize: (item) => {
        return {
          ...item,
          img: undefined // 减少sitemap体积
        }
      }
    }),
    mdx({
      optimize: {
        // 防止优化器处理 `h1` 元素
        // 这些元素将被视为自定义组件
        customComponentNames: ['table'],
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
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