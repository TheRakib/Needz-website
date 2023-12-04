import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Få de senaste nyheterna och berättelserna om elektriker, avloppsstopp, rörmokare, spolbil och jourtjänster för elektriska installationer över hela Stockholm.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
