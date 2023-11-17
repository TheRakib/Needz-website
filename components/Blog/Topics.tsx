"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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

export default function Topics() {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="w-full border rounded-lg border-black/40 text-black/70 flex flex-col gap-[18px] p-[30px] ">
      <h3 className="font-semibold text-black">Topics</h3>
      <div className="">
        {topicItems.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === `${item.id}`}
            onChange={handleChange(`${item.id}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="pl-0"
            >
              <Typography
                className={`${expanded === `${item.id}` ? "text-primary" : ""}`}
              >
                {item.title} ({item.count})
              </Typography>
            </AccordionSummary>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

const topicItems = [
  {
    id: 1,
    title: "Plumber",
    count: 3,
  },
  {
    id: 2,
    title: "Stop in drains",
    count: 4,
  },
  {
    id: 3,
    title: "Washing machine",
    count: 6,
  },
  {
    id: 4,
    title: "Electrician",
    count: 9,
  },
  {
    id: 5,
    title: "Electrical installations",
    count: 3,
  },
];
