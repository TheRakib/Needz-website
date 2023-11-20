import { Blog } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ item }: { item: Blog }) {
  function formatDate(dateString: string) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
  }

  return (
    <Link href={`/blog/${item.slug}`}>
      <div className="w-full border border-black/20 bg-white hover:bg-primary/10 hover:border-primary/10 rounded-lg cursor-pointer flex gap-6 p-5 ">
        <div className="w-[258px] h-[170px] relative ">
          <Image alt="blog" src={item.bannerImg} fill />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-[20px] md:text-[24px] ">
              {item.title}
            </h3>
            <p className="text-black/70 text-[14px] md:text-[16px] ">
              {item.author.name} - {formatDate(item._createdAt)}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href={item.author.facebook ? item.author.facebook : "/"}
              target="_blank"
            >
              <Image
                alt="facebook"
                src={"/social/facebook.svg"}
                height={26}
                width={26}
              />
            </Link>
            <Link href={item.author.twitter ? item.author.twitter : "/"}>
              <Image
                alt="twitter"
                src={"/social/Twitter.svg"}
                height={26}
                width={26}
              />
            </Link>
            <Link href={item.author.instagram ? item.author.instagram : "/"}>
              <Image
                alt="instagram"
                src={"/social/Instagram.svg"}
                height={26}
                width={26}
              />
            </Link>
          </div>
        </div>
      </div>
    </Link>
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
