import Image from "next/image";
import React from "react";

export default function BlogCard({ item }: Props) {
  return (
    <div className="w-full border border-black/20 bg-white hover:bg-primary/10 hover:border-primary/10 rounded-lg cursor-pointer flex gap-6 p-5 ">
      <div className="w-[258px] h-[170px] relative ">
        <Image alt="blog" src={item.img} fill />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[20px] md:text-[24px] ">
            {item.title}
          </h3>
          <p className="text-black/70 text-[14px] md:text-[16px] ">
            {item.text}
          </p>
        </div>
        <div className="flex gap-4">
          <Image
            alt="facebook"
            src={"/social/facebook.svg"}
            height={26}
            width={26}
          />
          <Image
            alt="twitter"
            src={"/social/Twitter.svg"}
            height={26}
            width={26}
          />
          <Image
            alt="instagram"
            src={"/social/Instagram.svg"}
            height={26}
            width={26}
          />
        </div>
      </div>
    </div>
  );
}

type Props = {
  item: {
    id: number;
    title: string;
    text: string;
    img: string;
  };
};
