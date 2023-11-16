import MainTexts from "@/components/Blog/SingleBlog/MainTexts";
import SecondText from "@/components/Blog/SingleBlog/SecondText";
import Social from "@/components/Blog/SingleBlog/Social";
import ServicesBanner from "@/components/Services/ServicesBanner";
import Image from "next/image";
import React from "react";

export default function page() {
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
