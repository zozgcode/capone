import "./Header.css"
import logo from "../../assets/capital-one-logo.svg"

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
