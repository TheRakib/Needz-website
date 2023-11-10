import React from "react";
import { twMerge } from "tailwind-merge";

export default function SecondTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={twMerge(
        `${
          className && className
        } md:text-[40px] text-[40px] md:text-left text-center font-semibold`
      )}
    >
      {title}
    </h2>
  );
}
