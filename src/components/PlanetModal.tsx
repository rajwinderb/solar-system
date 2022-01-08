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
    line-height: 1.8;
    color: #fff;
    h2 {
      text-align: center;
      font-family: "Press Start 2P", cursive;
    }
    p {
      margin-bottom: 1rem;
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
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
