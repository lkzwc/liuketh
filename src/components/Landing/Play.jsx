import React, { lazy, Suspense } from "react";
import wifi from "../../image/product/wifi2.webp";
import cloudwifi from "../../image/product/cloudwifi2.webp";
import neibu from "../../image/product/neibu.webp";
import number from "../../image/product/number.webp";

// 产品数据
const products = [
  {
    id: 1,
    name: "随身WiFi",
    description: "便携式WiFi设备，随时随地高速上网",
    image: wifi,
    imageAlt: "随身WiFi设备展示图",
    price: "¥9.9/天",
    features: ["无限流量", "全国漫游", "即插即用"],
    link: "/wifi",
    priority: true,
    color: "from-blue-500 to-cyan-400",
    icon: "⚡️"
  },
  {
    id: 2,
    name: "云路由",
    description: "智能路由设备，稳定高速的网络体验",
    image: cloudwifi,
    imageAlt: "云路由设备展示图",
    price: "¥299/年",
    features: ["5G网络", "智能管理", "远程控制"],
    link: "/wifi",
    priority: true,
    color: "from-purple-500 to-blue-500",
    icon: "🌐"
  },
  {
    id: 3,
    name: "内部套餐卡",
    description: "超值内部优惠套餐，专享特惠价格",
    image: neibu,
    imageAlt: "内部专属套餐卡展示图",
    price: "¥19.9/月",
    features: ["大流量", "低月租", "全国漫游"],
    link: "/hotcard",
    color: "from-pink-500 to-rose-500",
    icon: "💎"
  },
  {
    id: 4,
    name: "靓号专区",
    description: "精选靓号，彰显个性",
    image: number,
    imageAlt: "精选靓号展示图",
    price: "¥99起",
    features: ["号码靓丽", "自主选号", "即刻激活"],
    link: "http://d.tianlulh.com/pc/shop/default.aspx?mid=1615",
    color: "from-amber-500 to-orange-500",
    icon: "✨"
  }
];

// 加载占位符组件
const LoadingPlaceholder = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 rounded-xl mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
    {/* 图片容器 - 可点击整个区域 */}
    <a href={product.link} className="block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}></div>
        <img
          src={product.image.src}
          alt={product.imageAlt}
          className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
          loading={product.priority ? "eager" : "lazy"}
          decoding={product.priority ? "sync" : "async"}
          width="400"
          height="300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'fallback-image.jpg';
          }}
        />
        {/* 价格标签 */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${product.color} shadow-lg`}>
            {product.price}
          </span>
        </div>
      </div>
    </a>

    {/* 内容区域 */}
    <div className="p-4">
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{product.icon}</span>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      </div>
      
      {/* 特性展示 - 单行 */}
      <div className="flex items-center justify-between mb-3">
        {product.features.map((feature) => (
          <span 
            key={feature} 
            className={`inline-flex items-center text-xs font-medium bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}
          >
            {feature}
          </span>
        ))}
      </div>

      <a
        href={product.link}
        className={`block w-full text-center py-2 px-3 rounded-lg bg-gradient-to-r ${product.color} text-white text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
      >
        了解更多
      </a>
    </div>
  </div>
);

export default function Play() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            精选产品
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            为您提供优质的通信产品和服务，让连接更简单，生活更智能
          </p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
          <Suspense fallback={<LoadingPlaceholder />}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
