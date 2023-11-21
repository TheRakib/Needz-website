import CallContactButtons from "@/components/Shared/CallContactButtons";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebookF,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export default function Social({
  previousPost,
  nextPost,
  title: postTitle,
}: {
  previousPost: string;
  nextPost: string;
  title: string;
}) {
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "https://your-website.com/";
  };

  const shareUrl = encodeURI(getCurrentUrl());

  const handleShare = (platform: string) => {
    let shareLink = "";

    switch (platform) {
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${postTitle}&url=${shareUrl}`;
        break;
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${postTitle}`;
        break;
      default:
        // For generic link sharing
        shareLink = shareUrl;
        break;
    }

    // Open a new window or tab to share the link
    window.open(shareLink, "_blank");
  };

  return (
    <div className="max-w-layout mx-auto px-2">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mt-[90px] mb-[70px] ">
        <div className="flex gap-6 items-center">
          <p className="font-semibold text-[18px] ">Share this blog:</p>
          <div className="flex gap-3">
            <span
              onClick={() => handleShare("link")}
              className="border rounded-full border-primary cursor-pointer"
            >
              <FaLink className="text-primary m-3  text-[20px]" />
            </span>
            <span
              onClick={() => handleShare("twitter")}
              className="border rounded-full border-primary cursor-pointer"
            >
              <FaTwitter className="text-primary m-3 text-[20px]" />
            </span>
            <span
              onClick={() => handleShare("linkedin")}
              className="border rounded-full border-primary cursor-pointer"
            >
              <FaLinkedinIn className="text-primary m-3 text-[20px]" />
            </span>
            <span
              onClick={() => handleShare("facebook")}
              className="border rounded-full border-primary cursor-pointer"
            >
              <FaFacebookF className="text-primary m-3 text-[20px]" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-11">
          <Button className="hover:bg-white" disabled={!previousPost}>
            <Link
              href={previousPost ? previousPost : "/"}
              className="flex gap-2 md:gap-5 items-center capitalize text-base"
            >
              <span
                className={`"border rounded-full border-primary ${
                  previousPost
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"
                } cursor-pointer"`}
              >
                <FaAngleLeft className=" m-3  text-[20px]" />
              </span>
              <span className=" font-semibold">Previous Blog</span>
            </Link>
          </Button>
          <Button className="hover:bg-white" disabled={!nextPost}>
            <Link
              href={nextPost ? nextPost : "/"}
              className="flex gap-5 items-center capitalize text-base"
            >
              <span className={` font-semibold `}>Next Blog</span>
              <span
                className={`"border rounded-full border-primary ${
                  nextPost
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"
                } cursor-pointer"`}
              >
                <FaAngleRight className=" m-3  text-[20px]" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <CallContactButtons />
      </div>
    </div>
  );
}
