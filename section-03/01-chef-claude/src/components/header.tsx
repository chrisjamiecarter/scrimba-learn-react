import chefClaudeLogo from "../assets/chef-claude-icon.png";

export default function Header(): JSX.Element {
  return (
    <header>
      <img
        src={chefClaudeLogo}
        className="header-logo"
        alt="chef claude logo"
      />
      <span className="header-text">Chef Claude</span>
    </header>
  );
}
