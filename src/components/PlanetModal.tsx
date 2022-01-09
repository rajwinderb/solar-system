import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { IPlanet } from "../utils/Interfaces";
// import { useRef } from "react";

interface IPlanetModal {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  planet: IPlanet;
}

export default function PlanetModal(props: IPlanetModal): JSX.Element {
  const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ModalWrapper = styled.div`
    width: 600px;
    height: 500px;
    box-shadow: 0 0 20px rgb(255, 255, 0);
    background: #000;
    color: #fff;
    z-index: 10;
    border-radius: 10px;
  `;

  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1;
    color: #fff;
    h2 {
      text-align: center;
      font-family: "Press Start 2P", cursive;
    }
    p {
      text-align: left;
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: 25px;
    }
    .facts {
      text-align: center;
      text-decoration-line: underline;
      margin-top: 20px;
      margin-bottom: 15px;
    }
    .factsList {
      text-align: left;
      list-style-type: disc;
      list-style-position: inside;
      display: inline;
      height: 100%;
      overflow: hidden;
    }
    .factsList li {
      text-decoration-line: none;
      margin-bottom: 5px;
    }
    .factsList li:hover {
      cursor: auto;
      color: #fff;
    }
  `;

  const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: relative;
    top: 10px;
    left: 560px;
    width: 20px;
    height: 20px;
    padding: 0;
    z-index: 10;
  `;

  const closeModal = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    props.setShowModal(false);
  };

  return (
    <>
      {props.showModal ? (
        <Background onClick={closeModal}>
          <ModalWrapper>
            <ModalContent>
              <CloseModalButton aria-label="Close modal" onClick={closeModal} />
              <h2>{props.planet.name}</h2>
              <p>
                <strong>Distance from sun: </strong>
                {props.planet.distance_from_sun.toLocaleString()} km
              </p>
              <p>
                <strong>Diameter: </strong>
                {props.planet.distance_from_sun.toLocaleString()} km
              </p>
              <p>
                <strong>Moons: </strong>
                {props.planet.moons}
              </p>
              {props.planet.name !== "Earth" ? (
                <p>
                  <strong>Length of year: </strong>
                  {props.planet.length_of_year} Earth years
                </p>
              ) : (
                <p>
                  <strong>Length of year: </strong>
                  {props.planet.length_of_year} days
                </p>
              )}
              {props.planet.avg_temp !== null && (
                <p>
                  <strong>Average Temperature: </strong>
                  {props.planet.avg_temp}°C
                </p>
              )}
              {props.planet.min_temp !== null && props.planet.max_temp && (
                <p>
                  <strong>Surface Temperature Range: </strong>
                  Between {props.planet.min_temp}°C and {props.planet.min_temp}
                  °C
                </p>
              )}
              {props.planet.first_record !== null && props.planet.recorded_by && (
                <p>
                  <strong>First Recorded: </strong>
                  {props.planet.first_record} by {props.planet.recorded_by}
                </p>
              )}
              <p className="facts">
                <strong>Fun Facts</strong>
              </p>
              <ul className="factsList">
                {props.planet.facts.split(". ").map((fact, index) => (
                  <li key={index}>
                    {fact.trim()}
                    {fact.trim().slice(-1) !== "." && "."}
                  </li>
                ))}
              </ul>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
