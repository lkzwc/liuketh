import React, { useState } from 'react';
import wifi from '../../image/product/wifi.webp';
import wifi2 from '../../image/product/cloudwifi2.webp';
import neibu from '../../image/product/neibu.webp';
import number from '../../image/product/number.webp';

const products = [
  {
    id: 1,
    name: '随身WiFi',
    description: '便携式WiFi，随时随地高速上网',
    image: wifi.src,
    price: '¥299',
    features: ['4G/5G双模', '8小时续航', '支持多设备'],
    link: 'https://work.weixin.qq.com/gm/2f7011219a43a467a4e178a259797647',
    bgColor: 'from-blue-500 to-cyan-400',
    tag: '热销'
  },
  {
    id: 2,
    name: '云路由',
    description: '智能路由器，打造家庭网络中心',
    image: wifi2.src,
    price: '¥399',
    features: ['双频WiFi6', '智能组网', 'AI防护'],
    link: 'https://work.weixin.qq.com/gm/2f7011219a43a467a4e178a259797647',
    bgColor: 'from-purple-500 to-indigo-500',
    tag: '新品'
  },
  {
    id: 3,
    name: '内部套餐卡',
    description: '超值套餐，专享优惠价',
    image: neibu.src,
    price: '¥99起',
    features: ['大流量', '低月租', '全国漫游'],
    link: 'http://tc.liuketh.cn',
    bgColor: 'from-pink-500 to-rose-500',
    tag: '优惠'
  },
  {
    id: 4,
    name: '靓号专区',
    description: '精选靓号，彰显品味',
    image: number.src,
    price: '询价',
    features: ['号码靓丽', '可选性强', '全国可用'],
    link: 'http://tc.liuketh.cn',
    bgColor: 'from-amber-500 to-orange-500',
    tag: '精选'
  }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 标签 */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
          {product.tag}
        </span>
      </div>

      {/* 图片容器 */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="h-full w-full object-cover transform transition-transform duration-700 scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
          <span className="text-lg font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {product.price}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-2">{product.description}</p>
        
        <div className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center text-sm text-gray-700 transform transition-transform duration-300"
              style={{
                transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
        >
          了解更多
        </a>
      </div>
    </div>
  );
};

const Play = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            精选产品
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            为您提供优质的通信产品和服务，让连接更简单，生活更智能
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Play;
