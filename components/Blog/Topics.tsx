"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { getTopics } from "@/sanity/sanity-utils";
import { Topic } from "@/Types";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
    color: "blue",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// -----------------main function ----------------
export default function Topics({
  setTopic,
  topic,
}: {
  setTopic: Dispatch<SetStateAction<string | undefined>>;
  topic: string | undefined;
}) {
  const [expanded, setExpanded] = React.useState<string | false>("");
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
  // console.log("topics", topics);

  return (
    <div className="w-full border rounded-lg border-black/40 text-black/70 flex flex-col gap-[18px] p-[30px] ">
      <h3 className="font-semibold text-black">Rubrik</h3>
      <div className="">
        {topics ? (
          topics?.map((item) => (
            <Accordion
              key={item._id}
              expanded={expanded === `${item._id}`}
              onChange={handleChange(`${item._id}`)}
              onClick={() => handleSetTopic(item.topic)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="pl-0"
              >
                <Typography
                  className={`${
                    expanded === `${item._id}` ? "text-primary" : ""
                  }`}
                >
                  {item.topic} ({item.count})
                </Typography>
              </AccordionSummary>
            </Accordion>
          ))
        ) : (
          <LoadingSpinner size="sm" />
        )}
      </div>
    </div>
  );
}
