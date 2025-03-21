import { PadProps } from "../models/PadProps";

export default function Pad(props: PadProps) {
  const styles = {
    backgroundColor: props.color,
  };

  return (
    <button
      className={props.on ? "on" : undefined}
      style={styles}
      onClick={() => props.handleClick(props.id)}></button>
  );
}
