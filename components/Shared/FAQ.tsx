"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import TextTitle from "./TextTitle";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,

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

type Props = {
  title?: string;
  variant?: "home" | "services";
  titleClass?: string;
  faqItems: FaqItems;
};

export default function FAQ({
  title = "Frequently Asked Questions",
  variant = "home",
  titleClass = "!text-center mb-20",
  faqItems,
}: Props) {
  const [expanded, setExpanded] = React.useState<string | false>("1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="max-w-layout mx-auto my-[120px] px-2">
      <div className="max-w-[880px] mx-auto ">
        {variant === "home" ? (
          <SectionTitle title={title} className={titleClass} />
        ) : (
          <TextTitle title={title} className={titleClass} />
        )}
        <div className=" flex flex-col gap-6">
          {faqItems?.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === (`${item.id}` || "1")}
              onChange={handleChange(`${item.id}`)}
              className="rounded-xl border-black/30 "
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
              <AccordionDetails className="px-[30px] text-black/70 border-0 ">
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

type FaqItems = {
  id: number;
  title: string;
  description: string;
}[];
