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

  return {
    title: `${parentMetadata.title?.absolute} - ${id}`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
