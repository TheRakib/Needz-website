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
      "Har du problem med stopp i avloppet? Kontakta oss så hjälper vi dig! Det finns månfa orsaker till stopp i avlopp. Det kan bl.a vara matrester, fett, föremål som fastnat och mycket mer. Oavsett vad som orsakat ditt stopp så har vi skickliga tekniker som hjälper dig att bli kvitt stoppet och ser till så att avloppet fungerar som det ska igen.",
    para2: ` Vi hjälper även till med underhållsspolning, vilket vi rekommenderar att man gör ca var 4e-5e år. Ring oss så berättar vi mer!.`,
  },
  title2: "Avloppsrensning",
  description2Limit: 47,
  description2:
    "Tecken på att det börjar bli dags för avloppsrensning är t.ex; (PUNKTFORM) -Vattnet börjar ringa långsamt -Gurglande ljud i avloppet - Dålig lukt i avloppet. Dessa är vanliga tecken på att det börjar bli stopp i avloppet och  avloppet. Det är därför bra att hå",
};
