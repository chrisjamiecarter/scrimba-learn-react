import starFilled from "../assets/star-filled.png";
import starEmpty from "../assets/star-empty.png";
import { StarProps } from "../models/StarProps";

export default function Star(props: StarProps): JSX.Element {
  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button">
      <img
        src={props.isFilled ? starFilled : starEmpty}
        alt="favourite icon"
        className="favorite"
      />
    </button>
  );
}
