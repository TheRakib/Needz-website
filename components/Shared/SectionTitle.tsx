import React from "react";
import { twMerge } from "tailwind-merge";

export default function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2 className={`${className && className} text-title font-bold`}>
      {title}
    </h2>
  );
}
