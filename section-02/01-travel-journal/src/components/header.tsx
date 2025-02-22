import globeImage from "../assets/globe.png";

export default function Header(): JSX.Element {
  return (
    <header>
      <img className="header-image" src={globeImage} alt="globe logo" />
      <span className="header-text">travel journal</span>
    </header>
  );
}
