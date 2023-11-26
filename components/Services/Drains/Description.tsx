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
      "Om du har ett stopp i avloppet, kontakta oss. Oavsett om ditt avlopp är igensatt på grund av matrester, fett som blivit kvar i vasken, eller ett plastföremål som fastnat i toalettsitsen, kommer våra tekniker att hjälpa dig.",
    para2: `Alla avlopp behöver spolas rena från rester och fett minst vart femte år för att bibehålla ett bra vattenflöde`,
  },
  title2: "Avloppsrengöring",
  description2Limit: 47,
  description2:
    "Ett varningstecken på att avloppet behöver rengöras är att vattnet börjar rinna långsamt eller att ett gurglande ljud hörs i avloppet. En dålig lukt från badrummet kan också vara ett tecken på att en blockering har inträffat i avloppet. Samma dåliga lukt kan även indikera att det är dags att rengöra avloppet för att förhindra ytterligare problem.",
};
