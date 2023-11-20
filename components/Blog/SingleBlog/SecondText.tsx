import TextTitle from "@/components/Shared/TextTitle";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { PortableTextBlock } from "sanity";

export default function SecondText({
  appendix,
  img,
  text,
  lastTitle,
  lastText,
  summeryTitle,
  summery,
}: {
  appendix: PortableTextBlock[];
  img: string;
  text: PortableTextBlock[];
  lastTitle: string;
  lastText: PortableTextBlock[];
  summeryTitle: string;
  summery: PortableTextBlock[];
}) {
  return (
    <div className="flex flex-col gap-[50px] max-w-layout mx-auto px-2">
      <div className="w-full text-[18px] text-black/70 flex flex-col gap-8 ">
        {appendix && <PortableText value={appendix} />}
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row lg:gap-[50px] gap-4 text-[18px] text-black/70">
          {img && (
            <div className="w-[310px] h-[450px] md:h-[590px] md:w-[480px] ml-auto mr-auto lg:mr-0 relative">
              <Image alt="basin" src={img} fill />
            </div>
          )}
          <div className=" prose md:prose-lg max-w-[500px] xl:max-w-[730px]">
            <PortableText value={text} />
          </div>
        </div>
      </div>

      {/* ---------------third/ last section----------- */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full prose-lg">
          {lastTitle && <TextTitle className="h-20" title={lastTitle} />}
          {lastText && (
            <div className="text-black/70">
              <PortableText value={lastText} />
            </div>
          )}
        </div>
        <div className="w-full prose-lg">
          {summeryTitle && (
            <TextTitle
              className="h-20"
              title={summeryTitle ? summeryTitle : "Summary"}
            />
          )}
          {summery && (
            <div className="text-black/70">
              <PortableText value={summery} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
