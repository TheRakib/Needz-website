import React from "react";
import "./styles.css";

export default function Hexagon({
  content,
  color = "primary",
}: {
  content: string;
  color?: string;
}) {
  return (
    <div
      className={`hex relative bg-${color} after:border-t-${color} after:border-t-[20px] before:border-b-${color} before:border-b-[20px]`}
    >
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-semibold">
        {content}
      </p>
    </div>
  );
}

{
  /* <div
      className={`hex relative bg-${color} before:border-b-${color} before:border-b-[20px]`}
    >
      <div className="w-0 h-0 border-t-[20px] bg-primary border-t-primary absolute border-l-[30px] border-r-[30px] top-[30px] "></div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-semibold">
        {content}
      </p>
    </div> */
}
