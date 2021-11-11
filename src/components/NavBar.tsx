import "./NavBar.css";
import Planet from "./Planet";

export default function NavBar(): JSX.Element {
  return (
    <nav className="NavBar">
      <ul>
        <Planet />
        <Planet />
        <Planet />
        <Planet />
        <Planet />
        <Planet />
        <Planet />
        <Planet />
      </ul>
    </nav>
  );
}
