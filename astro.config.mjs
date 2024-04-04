import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

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
  integrations: [
    react(),
    sitemap(),
    mdx(),
    tailwind()
  ],
  devToolbar: {
    enabled: false
  },
  redirects: {
    // '/hot/[...slug]': '/hotcard',
  }
});