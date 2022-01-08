import "./NavBar.css";
import { useState, useEffect } from "react";
import Planet from "./Planet";
import { IPlanet } from "../utils/Interfaces";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";

export default function NavBar(): JSX.Element {
  const [planets, setPlanets] = useState<IPlanet[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/planets`)
      .then(function (response) {
        console.log(response);
        setPlanets(response.data.allPlanets);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const planetElements = planets?.map((planet) => (
    <Planet key={planet.id} planet={planet} />
  ));

  return (
    <nav className="NavBar">
      <ul>{planetElements}</ul>
    </nav>
  );
}
