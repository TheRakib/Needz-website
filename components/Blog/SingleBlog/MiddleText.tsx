import TextTitle from "@/components/Shared/TextTitle";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

export default function MiddleText({
  title,
  left,
  right,
}: {
  title: string;
  left: PortableTextBlock[];
  right: PortableTextBlock[];
}) {
  return (
    <div className="max-w-layout mx-auto my-10">
      {title && <TextTitle className="h-10" title={title} />}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        {left && (
          <div className="w-full prose-lg">
            <div className="text-black/70">
              <PortableText value={left} />
            </div>
          </div>
        )}
        {right && (
          <div className="w-full prose-lg">
            <div className="text-black/70">
              <PortableText value={right} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
