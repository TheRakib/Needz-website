import React from "react";

export default function LoadingSpinner({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className="">
      <div className="flex items-center justify-center ">
        <div
          className={`${
            size === "sm"
              ? "w-10 h-10"
              : size === "md"
              ? "w-20 h-20"
              : "w-40 h-40"
          } border-t-4 border-b-4 border-primary rounded-full animate-spin`}
        ></div>
      </div>
    </div>
  );
}
