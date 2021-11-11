import "./Planet.css";

interface Props {
  name: string;
}

export default function Planet(props: Props): JSX.Element {
  return <li className="Planet">{props.name}</li>;
}
