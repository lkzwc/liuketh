import React from "react";
import { RoughNotation } from "react-rough-notation";
import Marquee from "react-fast-marquee";
import { Image } from "@nextui-org/react";

export default function Cooperate() {
  return (
    <section class="w-8/12 mx-auto">
      <div class="text-center text-white text-4xl">
        <RoughNotation
          type="highlight"
          show={true}
          color="#2563EB"
          class="m-10 p-2"
        >
          合作共赢
        </RoughNotation>
        <p class="mx-auto mt-6 max-w-lg items-center text-center text-sm text-[#636262] sm:text-base md:mb-4 lg:mb-8">
          目前与我们合作的企业
        </p>
      </div>
      <Marquee>
        <Image
          src="https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/logo1.webp"
          width={200}
          height={100}
          alt="中国移动"
          className="rounded-3xl rounded-tl-3xl m-10 w-80 h-12"
        />
        <Image
          src="https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/logo2.webp"
          width={200}
          height={100}
          alt="中国联通"
          className="rounded-3xl rounded-tl-3xl m-10 w-50 h-12"
        />
        <Image
          src="https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/logo3.webp"
          width={200}
          height={100}
          alt="中国电信"
          className="rounded-3xl rounded-tl-3xl m-10 w-50 h-12"
        />
        <Image
          src="https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/logo5.webp"
          width={260}
          height={200}
          alt="银联支付"
          className="rounded-3xl rounded-tl-3xl m-10 w-50 h-12"
        />
        <Image
          src="https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/logo4.webp"
          width={240}
          height={200}
          alt="云闪付"
          className="rounded-3xl rounded-tl-3xl m-10 w-50 h-12"
        />
        <Image
          src="https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/logo7.webp"
          width={280}
          height={200}
          alt="支付宝支付"
          className="rounded-3xl rounded-tl-3xl m-10 w-50 h-12"
        />
        <Image
          src="https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/logo6.webp"
          width={220}
          height={300}
          alt="微信支付"
          className="rounded-3xl rounded-tl-3xl m-10 w-50 h-12"
        />
      </Marquee>
    </section>
  );
}
