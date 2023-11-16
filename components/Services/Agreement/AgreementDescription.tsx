import React from "react";
import Details from "../Details";

export default function AgreementDescription() {
  return (
    <div>
      <Details
        {...detailsProps}
        containerClass="!flex-col-reverse md:!flex-row"
      />
    </div>
  );
}

const detailsProps = {
  title:
    "Secure your peace of mind with our complimentary contract for BRF and property owners.",
  description: {
    para1:
      "It is important to maintain any kind of property regularly. But it can be difficult for a condominium association or a property manager to get quick and efficient help without a service agreement.",
    para2: ` Plumbers may be needed for a water leak, pipe replacement, pipe inspection or a smaller job such as changing a faucet. If there is a sudden power outage in an apartment, you may quickly need to have an electrician there or an electrical switchboard may need to be replaced.`,
  },
};
