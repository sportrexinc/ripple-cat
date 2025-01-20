import "./App.css";
import About from "./components/About/About";
import HeroPage from "./components/HeroPage/HeroPage";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import NavBar from "./components/NavBar/NavBar";
import Utilities from "./components/Utilities/Utilities";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <About />
      <HowItWorks />
      <Utilities/>
    </>
  );
}

export default App;
