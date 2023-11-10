"use client";
import Image from "next/image";
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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.2rem" }} />}
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

export default function AccordionPic({ items }: { items: Items }) {
  const [expanded, setExpanded] = React.useState<string | false>("1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-[50px]">
      <div className="w-[310px] h-[392px] md:w-[560px] lg:w-[680px] md:h-[692px] mx-auto relative ">
        <Image
          src={"/services/plumber/Ventilation.png"}
          alt="ventilation service"
          fill
        />
      </div>
      <div className="max-w-[510px] md:ml-auto md:mr-auto lg:mr-0">
        {items.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === `${item.id}`}
            onChange={handleChange(`${item.id}`)}
            className={`${
              expanded === `${item.id}` ? "border-0" : "border-b"
            } border-black/20`}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className="text-[22px] capitalize">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className=" pb-20">
              <ul
                className="flex flex-col gap-2 text-black/70"
                style={{ listStyle: "disc" }}
              >
                {item.description.map((des, i) => (
                  <li key={i}>
                    <Typography className="text-[18px]">{des}</Typography>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

type Items = {
  id: number;
  title: string;
  description: string[];
}[];
