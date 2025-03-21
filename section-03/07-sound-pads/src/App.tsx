import { useState } from "react";
import padData from "./data/pads";
import { AppProps } from "./models/AppProps";
import Pad from "./components/Pad";

export default function App() {
  const [pads, setPads] = useState(padData);

  const padElements = pads.map((pad) => {
    return <Pad key={pad.id} color={pad.color} on={pad.on} />;
  });

  return (
    <main>
      <div className="pad-container">{padElements}</div>
    </main>
  );
}
