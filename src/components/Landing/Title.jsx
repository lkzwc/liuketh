import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function Title(props) {
  const { title, desc } = props;
  return (
    <div class="text-center text-white text-4xl ">
      <RoughNotation type="highlight" show={true} color="#2563EB" class="p-2 m-2">
        {title}
      </RoughNotation>
      <p class="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
        {desc}
      </p>
    </div>
  );
}
