import React from 'react';
import { RoughNotation } from "react-rough-notation";
import Marquee from "react-fast-marquee";
import {
  Wechat,
  Alipay,
  Facebook,
  Google,
  Tiktok,
  Twitter,
  Xigua,
  Faceu,
} from "@icon-park/react";

const partners = [
  { id: 1, icon: Wechat, name: 'wechat', colors: ['#07C160', '#07C160', '#FFFFFF', '#07C160'] },
  { id: 2, icon: Alipay, name: 'alipay', colors: ['#1677FF', '#1677FF', '#FFFFFF', '#1677FF'] },
  { id: 3, icon: Facebook, name: 'facebook', colors: ['#1877F2', '#1877F2', '#FFFFFF', '#1877F2'] },
  { id: 4, icon: Google, name: 'google', colors: ['#EA4335', '#4285F4', '#34A853', '#FBBC05'] },
  { id: 5, icon: Tiktok, name: 'tiktok', colors: ['#000000', '#FF0050', '#00F2EA', '#000000'] },
  { id: 6, icon: Twitter, name: 'twitter', colors: ['#1DA1F2', '#1DA1F2', '#FFFFFF', '#1DA1F2'] },
  { id: 7, icon: Xigua, name: 'xigua', colors: ['#FF0000', '#FF0000', '#FFFFFF', '#FF0000'] },
  { id: 8, icon: Faceu, name: 'faceu', colors: ['#FF71C6', '#FF71C6', '#FFFFFF', '#FF71C6'] }
];

const IconComponent = ({ IconElement, colors }) => {
  return (
    <IconElement
      theme="multi-color"
      size={80}
      strokeWidth={2}
      fill={colors}
      className="transition-transform hover:scale-110"
    />
  );
};

export default function Cooperate() {
  return (
    <section className="md:w-8/12 mx-auto my-10">
      <div className="text-center">
        <div className="mb-6">
          <RoughNotation
            type="highlight"
            show={true}
            color="#2563EB"
            className="p-2"
          >
            <span className="text-lg md:text-2xl font-medium text-neutral-800">合作共赢</span>
          </RoughNotation>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-sm text-neutral-600 md:text-base">
          目前与我们合作的企业
        </p>
      </div>
      {/* <Marquee gradientWidth={50} speed={30} className="flex justify-evenly py-8">
        {partners.map(({ id, icon, colors }) => (
          <div key={id} className="mx-8">
            <IconComponent IconElement={icon} colors={colors} />
          </div>
        ))}
      </Marquee> */}
    </section>
  );
}
