import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Services",
  description: "Blog page",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
