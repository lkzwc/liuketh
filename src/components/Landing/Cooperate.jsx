import React from "react";
import { RoughNotation } from "react-rough-notation";
import Marquee from "react-fast-marquee";
import { Image } from "@nextui-org/react";

export default function Cooperate() {
  return (
    <section class="w-8/12 mx-auto min-h-[300px]">
      <div class="text-center text-white text-4xl">
          <RoughNotation
            type="highlight"
            show={true}
            color="#2563EB"
            class="m-2 p-2"
          >
            合作共赢
          </RoughNotation>
        <p class="mx-auto my-4 max-w-lg items-center text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
          目前与我们合作的企业
        </p>
      </div>
      <div className="gap-6">
        <Marquee>
          <Image
            src="https://img2.baidu.com/it/u=518827103,2960247070&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=356"
            width={200}
            height={100}
            alt="中国移动"
          />
          <Image
            src="https://img1.baidu.com/it/u=1833419566,3132580830&fm=253&fmt=auto&app=138&f=JPEG?w=459&h=229"
            width={200}
            height={100}
            alt="中国联通"
          />
          <Image
            src="https://img1.baidu.com/it/u=4120633148,3237138659&fm=253&fmt=auto&app=138&f=JPEG?w=628&h=353"
            width={200}
            height={100}
            alt="中国电信"
          />
          <Image
            src="https://img1.baidu.com/it/u=3645122045,1633369292&fm=253&fmt=auto&app=138&f=JPEG?w=630&h=444"
            width={200}
            height={100}
            alt="中国广电"
          />
          <Image
            src="https://0.rc.xiniu.com/g2/M00/F7/38/CgAGfFvr1B-AOzBCAATyidw06qU682.png"
            width={260}
            height={200}
            alt="银联支付"
          />
          <Image
            src="https://img2.baidu.com/it/u=4124798652,286971603&fm=253&fmt=auto&app=138&f=JPEG?w=654&h=354"
            width={240}
            height={200}
            alt="云闪付"
          />
          <Image
            src="https://img1.baidu.com/it/u=3101951965,225045682&fm=253&fmt=auto&app=120&f=JPEG?w=950&h=475"
            width={280}
            height={200}
            alt="支付宝支付"
          />
          <Image
            src="https://td.cdn-go.cn/enterprise_payment/v0.0.9/logo.png"
            width={220}
            height={300}
            alt="微信支付"
            class="ml-6 mt-12 h-30 sm:mt-6 sm:ml-8"
          />
        </Marquee>
      </div>
    </section>
  );
}
