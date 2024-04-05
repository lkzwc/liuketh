import { Image } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import { RoughNotation } from "react-rough-notation";

export default function Product(props) {
  const {
    title = "我们的产品",
    desc = "目前我们的产品已经覆盖全行业链，包括纯流量卡、随身wifi、手机靓号等等",
    data = Array.from({ length: 18 }, (_, i) => ({
      image: `https://mp-dbef5695-ba44-4423-8102-319bf5c8c363.cdn.bspapp.com/gw/${
        i + 1
      }.webp`,
      url: "http://tc.liuketh.cn",
    })),
  } = props;
  return (
    <section class="mx-auto grid mb-10 md:p-10">
      <div class="text-xl text-center text-white md:text-4xl">
        <div>
          <RoughNotation
            type="highlight"
            show={true}
            color="#2563EB"
            class="p-2 m-2"
          >
            {title}
          </RoughNotation>
        </div>
        <p class="mx-auto mb-8 mt-4 items-center text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
          {desc}
        </p>
      </div>
      <div class="w-max-[75vw]">
        <Marquee>
          {data.map((item) => (
            <a href={item.url} target="_blank">
              <Image
                src={item.image}
                alt={`${new Date().getFullYear()}无限流量卡`}
                width={400}
                height={300}
                className="rounded-3xl rounded-tl-3xl m-2 w-16 h-16 md:w-80 md:h-80 "
              />
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}