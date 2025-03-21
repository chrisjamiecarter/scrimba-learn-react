import { useState } from "react";
import { PadProps } from "../models/PadProps";

export default function Pad(props: PadProps) {
  const [on, setOn] = useState(props.on);

  function toggleOn() {
    setOn((prev) => !prev);
  }

  const styles = {
    backgroundColor: props.color,
  };

  return (
    <button
      className={on ? "on" : undefined}
      style={styles}
      onClick={toggleOn}></button>
  );
}
