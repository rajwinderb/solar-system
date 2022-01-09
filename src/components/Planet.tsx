import { IPlanet } from "../utils/Interfaces";
import "./Planet.css";
import { useState } from "react";
import PlanetModal from "./PlanetModal";

interface Props {
  planet: IPlanet;
}

export default function Planet(props: Props): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <li className="Planet" onClick={openModal}>
        {props.planet.name}
      </li>
      <PlanetModal
        showModal={showModal}
        setShowModal={setShowModal}
        planet={props.planet}
      />
    </>
  );
}
