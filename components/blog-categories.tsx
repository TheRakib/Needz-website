"use client";

import { SetStateAction, Dispatch, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Topic } from "@/Types";
import { getTopics } from "@/sanity/sanity-utils";
import LoadingSpinner from "./Shared/LoadingSpinner";

export default function BlogCategories({
  setTopic,
  topic,
}: {
  setTopic: Dispatch<SetStateAction<string | undefined>>;
  topic: string | undefined;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [expanded, setExpanded] = useState<string | false>("");
  const [topics, setTopics] = useState<Topic[]>();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleSetTopic = (newTopic: string) => {
    topic === newTopic ? setTopic("*") : setTopic(newTopic);
  };

  useEffect(() => {
    const fetchAndSetPost = async () => {
      const topics = await getTopics();
      setTopics(topics);
    };

    fetchAndSetPost();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-2">
          <CardTitle>Kategorier</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {topics ? (
              topics.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleSetTopic(category.topic)}
                >
                  <p
                    // href={`/blogg/kategori/${category}`}
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    {category.topic}
                  </p>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </li>
              ))
            ) : (
              <LoadingSpinner size="sm" />
            )}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
