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
    <div className="max-w-layout mx-auto mt-[77px] mb-[50px] ">
      <p className="font-semibold text-black/90 mb-8">4 min read</p>
      <div className="flex flex-col lg:flex-row lg:gap-[50px] gap-4 text-[18px] text-black/70">
        {mainText && (
          <div className=" prose lg:prose-lg">
            <PortableText value={mainText} />
          </div>
        )}
        {mainTextImg && (
          <div className="w-[310px] h-[450px] md:h-[590px] lg:w-[480px] ml-auto mr-auto lg:mr-0 relative ">
            <Image alt="basin" src={mainTextImg} fill />
          </div>
        )}
      </div>
    </div>
  );
}
