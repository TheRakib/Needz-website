import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog page",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
