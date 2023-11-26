"use client";

import { Post } from "@/Types";
import MainTexts from "@/components/Blog/SingleBlog/MainTexts";
import MiddleText from "@/components/Blog/SingleBlog/MiddleText";
import SecondText from "@/components/Blog/SingleBlog/SecondText";
import Social from "@/components/Blog/SingleBlog/Social";
import ServicesBanner from "@/components/Services/ServicesBanner";
import { getPost } from "@/sanity/sanity-utils";
import { formatDate } from "@/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [blog, setBlog] = useState<Post | null>();
  const param = useParams();
  // console.log("param", param.id);
  // console.log(blog);

  useEffect(() => {
    const fetchAndSetPost = async () => {
      const post = await getPost(param.id as string);
      setBlog(post);
    };

    fetchAndSetPost();
    // console.log("post", blog);
  }, [param]);

  return (
    <>
      {blog ? (
        <div>
          <ServicesBanner
            title={blog.title}
            breadcrumb={blog.title}
            img={blog.bannerImg}
            firstItem="Blogg"
            extraInfo={
              <div className="mt-8 flex items-center gap-3">
                <Image
                  alt="icon"
                  src={"/blog/icon.png"}
                  width={44}
                  height={44}
                  className="bg-white rounded-full"
                />
                {formatDate(blog._createdAt)} of
                <a
                  href="https://www.joureliten.se/author/joureliten/"
                  className="underline"
                >
                  Jour365 i Jourtjänst
                </a>
              </div>
            }
          />
          {blog.mainText ? (
            <>
              {blog.mainText && blog.mainTextImg && (
                <MainTexts
                  mainText={blog.mainText}
                  mainTextImg={blog.mainTextImg}
                />
              )}
              <MiddleText
                title={blog.middleTitle}
                left={blog.middleTextLeft}
                right={blog.middleTextRight}
              />
              {/* -------second and last section---- */}
              <SecondText
                appendix={blog.appendix}
                img={blog.secondTextImg}
                text={blog.secondText}
                lastTitle={blog.lastTitle}
                lastText={blog.lastText}
                summeryTitle={blog.summeryTitle}
                summery={blog.summery}
              />
            </>
          ) : (
            <p className="text-lg max-w-layout mx-auto">Coming soon...</p>
          )}
          <Social
            previousPost={blog.previousSlug}
            nextPost={blog.nextSlug}
            title={blog.title}
          />
        </div>
      ) : null}
    </>
  );
}
