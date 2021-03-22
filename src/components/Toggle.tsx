import React from "react";
import "../style/_header.scss";
import { useStore } from "../assets/Hooks/store";

const Toggle: React.FC = () => {
  const toggler = useStore((state) => state.toggler);
  const switchToggler = useStore((state) => state.switchToggler);

  return (
    <div
      className={`toggler ${toggler ? "toggled" : ""}`}
      onClick={switchToggler}
    >
      <div className={`${toggler ? "ball-right" : "ball"}`}></div>
    </div>
  );
};

export default Toggle;
