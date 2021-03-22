import React from "react";
import "../style/_header.scss";
import Toggle from "./Toggle";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="price-header">Our Pricing</h1>
      <div className="plan">
        <p>Annually</p>
        <Toggle />
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default Header;
