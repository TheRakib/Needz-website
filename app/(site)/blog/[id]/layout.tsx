import { getPost } from "@/sanity/sanity-utils";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: { id: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const parentMetadata = await parent;
  const post = await getPost(params.id as string);

  return {
    title: `${parentMetadata.title?.absolute} - ${id}`,
    description: `${post?.metaDescription}`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
