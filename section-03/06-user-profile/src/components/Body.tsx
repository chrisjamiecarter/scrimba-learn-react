import { BodyProps } from "../models/HeaderProps copy";

export default function Body(props: BodyProps) {
  return (
    <section>
      <h1>Welcome back, {props.userName ? props.userName : null}!</h1>
    </section>
  );
}
