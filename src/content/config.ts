


// 1. 从 `astro:content` 导入
import { z, defineCollection } from 'astro:content';
// 2. 定义集合
const blogCollection = defineCollection({
  type: 'content',
    schema: ({ image })=>z.object({
      title: z.string(),
      pubDate: z.string(),
      description: z.string(),
      cover:  image().refine((img) => img.width >= 580, {
        message: "封面图片必须至少 1080 像素宽！",
      }),
      coverAlt: z.string(),
      author: z.string(),
      image: z.object({
        url:  image().refine((img) => img.width >= 580, {
          message: "封面图片必须至少 1080 像素宽！",
          }).or(z.string()).optional(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
 });

 const hotCard = defineCollection({
    type: 'content',
    schema: ({ image })=>z.object({
      title: z.string(),
      pubDate: z.string(),
      description: z.string(),
      cover:  image().refine((img) => img.width >= 580, {
        message: "封面图片必须至少 1080 像素宽！",
      }),
      coverAlt: z.string(),
      author: z.string(),
      image: z.object({
        url: image().refine((img) => img.width >= 580, {
          message: "封面图片必须至少 1080 像素宽！",
          }).or(z.string()).optional(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
 });


 const wifi = defineCollection({
  type: 'content',
  schema: ({ image })=>z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    cover:  image().refine((img) => img.width >= 580, {
      message: "封面图片必须至少 1080 像素宽！",
    }),
    coverAlt: z.string(),
    author: z.string(),
    image: z.object({
      url: image().refine((img) => img.width >= 580, {
        message: "封面图片必须至少 1080 像素宽！",
        }).or(z.string()).optional(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});
// 3. 导出一个 `collections` 对象来注册集合
//    这个键应该与 `src/content` 中的集合目录名匹配
export const collections = {
  'blog': blogCollection,
  'hotcard': hotCard,
  'wifi':wifi
};