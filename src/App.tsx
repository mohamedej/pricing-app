import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import "./style/main.scss";
import Bg1 from "../src/assets/images/bg-top.svg";
import Bg2 from "../src/assets/images/bg-bottom.svg";
const App: React.FC = () => {
  return (
    <div className="App">
      <img className="top-bg" src={Bg1} alt="bg" />
      <img className="bottom-bg" src={Bg2} alt="bg2" />
      <Header />
      <Cards />
    </div>
  );
};

export default App;
