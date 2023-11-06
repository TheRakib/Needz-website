"use client";

import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
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
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>("1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="max-w-layout mx-auto my-[120px]">
      <div className="max-w-[880px] mx-auto ">
        <SectionTitle
          title="Frequently Asked Questions"
          className="text-center"
        />
        <div className=" mt-20">
          {faqItems.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === (`${item.id}` || "1")}
              onChange={handleChange(`${item.id}`)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className={`${
                  expanded === `${item.id}`
                    ? "text-black px-[30px] pt-[30px]"
                    : "text-black/80 p-[30px] "
                }  `}
                expandIcon={
                  expanded === `${item.id}` ? (
                    <AiOutlineMinus className="transform rotate-90" />
                  ) : (
                    <AiOutlinePlus />
                  )
                }
              >
                <Typography className="font-semibold text-[18px] ">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="px-[30px] text-black/70 border-0">
                <Typography className="text-base leading-8 tracking-wider">
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "How quickly are you there?",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
  {
    id: 2,
    title: "How can your startup hire a lawyer?",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
  {
    id: 3,
    title: "How you people helps the victim?",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
  {
    id: 4,
    title: "Is there any way to contact with you?",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
  {
    id: 5,
    title: "How we can get justice? ",
    description:
      "We guarantee help on the same day and aim to be on site within 1 hour of ordering at addresses in the Stockholm area.",
  },
];
