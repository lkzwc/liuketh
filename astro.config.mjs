import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // 示例：在每个页面上禁用注入基本的`base.css`导入。
    // 如果你需要定义或导入你自己的 "base.css"，这很有用。
    applyBaseStyles: false
  }), mdx()]
});