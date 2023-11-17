"use client";

import { Blog } from "@/Types";
import MainTexts from "@/components/Blog/SingleBlog/MainTexts";
import SecondText from "@/components/Blog/SingleBlog/SecondText";
import Social from "@/components/Blog/SingleBlog/Social";
import ServicesBanner from "@/components/Services/ServicesBanner";
import { getPost } from "@/sanity/sanity-utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [blog, setBlog] = useState<Blog>();
  const param = useParams();
  // console.log("param", param.id);
  // console.log("blog", blog);

  useEffect(() => {
    const fetchAndSetPost = async () => {
      const post = await getPost("installing-a-new-dishwasher");
      setBlog(post);
    };

    fetchAndSetPost();
  }, [param]);

  return (
    <div>
      <ServicesBanner
        title="Installing a new dishwasher?"
        breadcrumb="Installing a dishwasher page"
        img="/blog/single-blog.png"
        firstItem="Blog/newsletter"
        extraInfo={
          <div className="mt-8 flex items-center gap-3">
            <Image
              alt="icon"
              src={"/blog/icon.png"}
              width={44}
              height={44}
              className="bg-white rounded-full"
            />
            August 17, 2023 of
            <a
              href="https://www.joureliten.se/author/joureliten/"
              className="underline"
            >
              the duty elite
            </a>
          </div>
        }
      />
      <MainTexts />
      <SecondText />
      <Social />
    </div>
  );
}
