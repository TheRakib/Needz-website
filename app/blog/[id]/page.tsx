import MainTexts from "@/components/Blog/SingleBlog/MainTexts";
import SecondText from "@/components/Blog/SingleBlog/SecondText";
import Social from "@/components/Blog/SingleBlog/Social";
import ServicesBanner from "@/components/Services/ServicesBanner";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const parentMetadata = await parent;
  console.log("parentMetadata:", parentMetadata);

  return {
    title: ` ${parentMetadata.title?.absolute} - ${id}`,
  };
}

export default async function page() {
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
