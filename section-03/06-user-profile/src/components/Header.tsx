import avatar from "../assets/user.png";
import { HeaderProps } from "../models/HeaderProps";

export default function Header(props: HeaderProps) {
  return (
    <header>
      <img src={avatar} />
      <p>{props.userName ? props.userName : null}</p>
    </header>
  );
}
