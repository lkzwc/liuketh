import { Image } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import { RoughNotation } from "react-rough-notation";

export default function Product() {
  return (
    <section class=" max-w-[88vw] mx-auto grid gap-4">
      <div class="text-center text-white text-3xl">
        <RoughNotation type="highlight" show={true} color="#2563EB" class="p-2 m-2">
          我们的产品
        </RoughNotation>
        <p class="mx-auto mb-8 mt-4 items-center text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
          目前我们的产品已经覆盖全行业链，包括纯流量卡、随身wifi、手机靓号等等
        </p>
      </div>
      <Marquee class="flex gap-4">
        {Array.from({length: 18}, (_, i) => i + 1).map((item) => (
          <Image
            src={`https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/${item}.jpg`}
            alt={`${new Date().getFullYear()}无限流量卡`}
            width={400}
            height={200}
            class="rounded-3xl rounded-tl-3xl m-2 w-96 h-96"
          />
        ))}
      </Marquee>
    </section>
  );
}
