import React from "react";
import Details from "../Details";

export default function Description() {
  return (
    <div className="max-w-layout mx-auto">
      <Details
        {...detailsProps}
        containerClass="!flex-col-reverse md:!flex-row"
      />
    </div>
  );
}

const detailsProps = {
  description: {
    para1:
      "With our broad competence in electricity, we can take on assignments in everything from electrical installations in villas and holiday homes to larger undertakings.",
    para2: ` Our knowledgeable <a href="#" class="underline">electricians</a> help both companies and private individuals with everything from minor electrical services to more extensive contracting projects.`,
  },
  title2: "All types of electrical installations",
  title2Class: "justify-between",
};
