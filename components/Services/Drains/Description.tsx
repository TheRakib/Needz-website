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
      "Möter du hinder i ditt avloppssystem? Vi är här för att hjälpa! Avloppsstopp kan orsakas av allt från matrester till föremål som blockerar flödet. Våra erfarna tekniker är experter på att snabbt identifiera och åtgärda problemet, återställa ditt avlopp till optimal funktion. ",
    para2: ` Vi erbjuder också förebyggande underhållsspolningar för att hålla dina system i toppskick. Kontakta oss för en lösning som varar.`,
  },
  title2: "Avloppsrensning",
  description2Limit: 47,
  description2:
    "Upplever du långsamt avrinnande vatten, gurglande ljud eller dålig lukt? Detta är tecken på att avloppet kan vara på väg att täppas igen. Våra VVS-experter kan effektivt rensa ditt avlopp och förebygga framtida problem, förlänga dina rörs livslängd och säkerställa renhet och hygien.",
};
