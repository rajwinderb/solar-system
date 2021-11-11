import "./App.css";
import AppHeader from "./components/AppHeader";
import NavBar from "./components/NavBar";
import SolarSystem from "./components/SolarSystem";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <NavBar />
      <SolarSystem />
    </>
  );
}

export default App;
