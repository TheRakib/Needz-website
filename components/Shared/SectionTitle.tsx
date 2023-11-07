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
    <h2
      className={`${
        className && className
      } text-[36px] md:text-title font-bold text-center md:text-left `}
    >
      {title}
    </h2>
  );
}
