import { useState } from "react";
import padData from "./data/pads";
import Pad from "./components/Pad";

export default function App() {
  const [pads, setPads] = useState(padData);

  function togglePadOn(id: number) {
    setPads((prev) =>
      prev.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : { ...pad };
      })
    );
  }

  const padElements = pads.map((pad) => {
    return (
      <Pad
        key={pad.id}
        id={pad.id}
        color={pad.color}
        on={pad.on}
        handleClick={togglePadOn}
      />
    );
  });

  return (
    <main>
      <div className="pad-container">{padElements}</div>
    </main>
  );
}
