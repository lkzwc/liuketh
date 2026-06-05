import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.liuketh.cn',
  build: {
    inlineStylesheets: 'never',
    charset: 'utf8',
    // 开启CSS代码分割优化
    cssCodeSplit: true,
    // 开启资源内联优化
    assetsInlineLimit: 4096
  },
  // 开启HTML压缩
  compressHTML: true,
  markdown: {
    gfm: true,
    shikiConfig: {
      theme: 'github-dark',
    }
  },
  // 图片优化 - 使用sharp
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
      changefreq: 'daily',
      priority: 1.0,
      // 自定义sitemap生成
      filter: (page) => {
        // 排除后台页面
        return !page.includes('/admin') && !page.includes('/login');
      },
      serialize: (item) => {
        return {
          ...item,
          // 移除图片减少体积
          img: undefined
        }
      }
    }),
    mdx({}),
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
    // 开启HTML压缩 (使用esbuild)
    build: {
      minify: 'esbuild'
    }
  },
  redirects: {
    // '/hot/[...slug]': '/hotcard',
  }
});
