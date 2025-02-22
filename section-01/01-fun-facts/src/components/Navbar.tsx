import reactLogo from "../assets/react.svg";

export default function Navbar(): JSX.Element {
  return (
    <header>
      <nav>
        <img src={reactLogo} alt="React logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}
