import React from "react";
import Details from "../Details";

export default function Description() {
  return (
    <div>
      <Details {...detailsProps} />
    </div>
  );
}
const detailsProps = {
  description: {
    para1:
      "If you have a stopped sewer, Kontakta oss. Whether your drain clog is due to food residue, grease left in the sink, or a plastic object stuck in the toilet seat, our technicians will help you.",
    para2: `All drains need to be flushed of residue and grease at least every five years to maintain good water flow.`,
  },
  title2: "Drain Cleaning",
  description2Limit: 47,
  description2:
    "A warning sign that the drain should be cleaned is that the water starts to flow slowly or that a gurgling/gurgling sound is heard in the drain. A bad smell from the bathroom can also be a sign that a blockage has occurred in the drain. A bad smell from the bathroom can also be a sign that a blockage has occurred in the drain.",
};
