import Image from "next/image";
import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

export default function MainTexts({
  mainText,
  mainTextImg,
}: {
  mainText: PortableTextBlock[];
  mainTextImg: string;
}) {
  return (
    <div className="max-w-layout mx-auto mt-[77px] mb-[50px] px-2">
      <p className="font-semibold text-black/90 mb-8">4 min läsning</p>
      <div className="flex flex-col lg:flex-row lg:gap-[50px] gap-4 text-[18px] text-black/70">
        {mainText && (
          <div className="prose-lg max-w-[500px] xl:max-w-[730px]">
            <PortableText value={mainText} />
          </div>
        )}
        {mainTextImg && (
          <div className="w-[310px] h-[450px] md:h-[590px] md:w-[480px] ml-auto mr-auto lg:mr-0 relative ">
            <Image alt="basin" src={mainTextImg} fill />
          </div>
        )}
      </div>
    </div>
  );
}
