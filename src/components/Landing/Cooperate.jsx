import React from "react";
import { RoughNotation } from "react-rough-notation";
import Marquee from "react-fast-marquee";
import {
  Wechat,
  Facebook,
  Google,
  Tiktok,
  Twitter,
  Xigua,
  Faceu,
  Topbuzz,
} from "@icon-park/react";


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
            <span className="text-lg md:text-2xl font-medium text-neutral-800">
              合作共赢
            </span>
          </RoughNotation>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-sm text-neutral-600 md:text-base">
          目前与我们合作的企业
        </p>
      </div>
      <div class="flex justify-center items-center space-x-12">
      <Faceu theme="multi-color" size="47" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={1}/>
      <Topbuzz theme="multi-color" size="47" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={1}/>  
        <Wechat
          theme="multi-color"
          size="47"
          fill={["#333", "#2F88FF", "#FFF", "#43CCF8"]}
          strokeWidth={1}
        />
        <Facebook
          theme="multi-color"
          size="47"
          fill={["#333", "#2F88FF", "#FFF", "#43CCF8"]}
          strokeWidth={1}
        />
        <Xigua
          theme="multi-color"
          size="47"
          fill={["#333", "#2F88FF", "#FFF", "#43CCF8"]}
          strokeWidth={1}
        />
        <Twitter
          theme="multi-color"
          size="47"
          fill={["#333", "#2F88FF", "#FFF", "#43CCF8"]}
          strokeWidth={1}
        />
        <Tiktok
          theme="multi-color"
          size="47"
          fill={["#333", "#2F88FF", "#FFF", "#43CCF8"]}
          strokeWidth={1}
        />
        <Google theme="multi-color" size="47" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={1}/>
      </div>
    </section>
  );
}
