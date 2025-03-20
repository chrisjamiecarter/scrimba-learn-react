import { JSX, useState } from "react";
import { JokeProps } from "../models/JokeProps";

export default function Joke(props: JokeProps): JSX.Element {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prev) => !prev);
  }
  console.log(isShown);
  return (
    <div>
      {props.setup ?? <h3>{props.setup}</h3>}
      {isShown ? <p>{props.punchline}</p> : null}
      <button type="button" onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} punchline
      </button>
      <hr />
    </div>
  );
}
