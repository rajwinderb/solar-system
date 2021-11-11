import "./NavBar.css";
import Planet from "./Planet";

export default function NavBar(): JSX.Element {
  return (
    <nav className="NavBar">
      <ul>
        <Planet name={"Mercury"} />
        <Planet name={"Venus"} />
        <Planet name={"Earth"} />
        <Planet name={"Mars"} />
        <Planet name={"Jupiter"} />
        <Planet name={"Saturn"} />
        <Planet name={"Uranus"} />
        <Planet name={"Neptune"} />
      </ul>
    </nav>
  );
}
