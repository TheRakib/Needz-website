import React from "react";

export default function TextTitle({
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
      } text-[25px] md:text-[30px] font-semibold text-center md:text-left `}
    >
      {title}
    </h2>
  );
}
