import logo from "../images/happy-face.png";

export default function Header() {
  return (
    <header className="header bg--color">
      <img src={logo} className="header--image" alt="logo" />
      <h2 className="header--title">Meme Creator</h2>
    </header>
  );
}
