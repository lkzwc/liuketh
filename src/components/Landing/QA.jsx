import React from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { RoughNotation } from "react-rough-notation";
import { Plus } from "@icon-park/react";

const qas = [
  {
    q: "流量卡是靠谱的吗？可以一直使用吗",
    a: "流量卡是由中国移动通信集团公司在2007年2月1日 前发行的手机卡，由于无限卡数量少，使用稳定不限速，双接入点不扣钱，大部分还包无限彩信等优点，已经成为广大纯流量卡用户的首选。肯定的回答是，当然是靠谱的，我们已经从事该行业十余年了，大家可以放心使用，有任何问题都是可以联系我们客服的",
  },
  {
    q: "流量卡与电话卡有什么区别?",
    a: "流量卡和电话卡的主要区别在于它们的功能和用途。电话卡，也称为手机卡，是一种用于移动通信的卡片，它主要用于提供语音通话和短信服务。电话卡通常需要与手机或其他移动设备配合使用，通过手机信号提供语音通信和短信功能。流量卡则是一种专门用于提供移动数据服务的卡片，它主要用于连接互联网和移动数据网络。流量卡通常需要与支持移动数据功能的设备配合使用，如智能手机、平板电脑、移动路由器等，通过移动数据网络提供数据流量，以便用户能够上网、浏览网页、使用社交媒体、观看视频等。总的来说，电话卡主要用于语音通话和短信服务，而流量卡主要用于提供移动数据服务。在一些情况下，电话卡也可以提供移动数据服务，但通常流量套餐较少，而流量卡则专注于提供大量的数据流量。",
  },
  {
    q: "流量卡9.9元100g全国通用怎么办理?",
    a: "流量卡9.9元100G的流量卡（纯流量卡）非常的稀缺，我们官方会不定时提供申请链接，大家可以随时关注一下，直接在我们的官网申请即可",
  },
  {
    q: "流量卡怎么购买正规的?",
    a: "流量卡如何购买正规的，这一直是大家谈论的问题，我们虽然有各种各样的官方平台，但是官方没有太多的优惠，我们可以通过朋友介绍或者百度搜索获取最新的申请链接，当然前提是要排除各种非正规的网站",
  },
  {
    q: "流量卡售后是怎样的呢？",
    a: "我们的售后配备有专门的客户群，大家遇到任何问题都可以在群里提出来，我们客服会实时处理，当然你也可以添加我们的专属客服微信【liuketh000】【liuketh111】进行沟通，除此之外，如果你有任何不满意的地方，也可以拨打我们的电话 15556355573 进行投诉",
  },
];

export default function QA() {
  return (
      <section class="w-8/12 mx-auto p-10">
      <div class="text-center text-white text-4xl">
        <div>
          <RoughNotation
            type="highlight"
            show={true}
            color="#2563EB"
            class="p-2"
          >
            FAQS
          </RoughNotation>
        </div>
        <p class="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
          关于一些常见问题的解答
        </p>
      </div>

      <div>
        <Accordion class="my-2" variant="bordered">
          {qas.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label="Moon"
              indicator={<Plus theme="outline" size="24" fill="#333" />}
              title={item.q}
            >
              {item.a}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
