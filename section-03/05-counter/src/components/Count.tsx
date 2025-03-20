import { JSX } from "react";
import { CountProps } from "../models/CountProps";

export default function Count(props: CountProps): JSX.Element {
  return <h2 className="count">{props.number}</h2>;
}
