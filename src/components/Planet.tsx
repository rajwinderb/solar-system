import { IPlanet } from "../utils/Interfaces";
import "./Planet.css";

interface Props {
  planet: IPlanet;
}

export default function Planet(props: Props): JSX.Element {
  return <li className="Planet">{props.planet.name}</li>;
}
