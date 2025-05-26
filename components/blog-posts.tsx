"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Blogs } from "@/Types";
import LoadingSpinner from "./Shared/LoadingSpinner";
import { PortableText } from "@portabletext/react";

// Helper function to limit text to 80 words
const limitWords = (text: string, limit: number) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

export default function BlogPosts({ blogs }: { blogs?: Blogs }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // console.log("blogs", blogs);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-8"
    >
      {blogs ? (
        blogs.posts?.map((post, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <div className="aspect-[4/3] md:h-full relative">
                    <Image
                      src={post.bannerImg || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post._createdAt}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author.name}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 hover:text-emerald-600 transition-colors">
                      <Link href={`/blogg/${post.slug}`}>
                        {post.title.length > 50
                          ? `${post.title.slice(0, 50)}...`
                          : post.title}
                      </Link>
                    </h2>
                    <div className="text-gray-600 mb-4 line-clamp-3">
                      <PortableText
                        value={post.mainText.filter(
                          (block) => block._type !== "image"
                        )}
                        components={{
                          block: {
                            normal: ({ children }) => {
                              const text = children?.toString() || "";
                              return <p>{limitWords(text, 80)}</p>;
                            },
                          },
                        }}
                      />
                    </div>
                    <Link
                      href={`/blogg/${post.slug}`}
                      className="inline-flex items-center text-emerald-600 font-medium hover:underline"
                    >
                      Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </motion.div>
  );
}
