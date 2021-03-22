import React from "react";
import { useStore } from "../assets/Hooks/store";

const Cards: React.FC = () => {
  const monthly: string[] = ["19.99", "24.99", "39.99"];
  const yearly: string[] = ["199.99", "249.99", "399.99"];
  const toggler = useStore((state) => state.toggler);

  return (
    <div className="container">
      <div className="side-card">
        <ul className={`inner-data ${toggler ? "on" : ""}`}>
          <li>Basic</li>
          <h1>{`$ ${toggler ? monthly[0] : yearly[0]}`}</h1>
          <span className="divider"></span>
          <li>500 GB Storage</li>
          <span className="divider"></span>
          <li>2 Users Allowed</li>
          <span className="divider"></span>
          <li>Send up to 3 GB</li>
          <span className="divider"></span>
          <button className={`sub-button ${toggler ? "sub-btn" : ""}`}>
            Learn More
          </button>
        </ul>
      </div>
      <div className="main-card">
        <ul className={`main-inner-data ${toggler ? "btn" : ""}`}>
          <li>Professional</li>
          <h1>{`$ ${toggler ? monthly[1] : yearly[1]}`}</h1>
          <span className="main-divider"></span>
          <li>1 TB Storage</li>
          <span className="main-divider"></span>
          <li>5 Users Allowed</li>
          <span className="main-divider"></span>
          <li>Send up to 10 GB</li>
          <span className="main-divider"></span>
          <button className={`main-button ${toggler ? "main-btn" : ""}`}>
            Learn More
          </button>
        </ul>
      </div>
      <div className="side-card">
        <ul className={`inner-data ${toggler ? "on" : ""}`}>
          <li>Master</li>
          <h1>{`$ ${toggler ? monthly[2] : yearly[2]}`}</h1>
          <span className="divider"></span>
          <li>2TB Storage</li>
          <span className="divider"></span>
          <li>10 Users Allowed</li>
          <span className="divider"></span>
          <li>Send up to 10 GB</li>
          <span className="divider"></span>
          <button className={`sub-button ${toggler ? "sub-btn" : ""}`}>
            Learn More
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
