import React from "react";
import { useNavigate } from "react-router-dom";
import Vypechka1 from "../images/выпечка1 1 (2).png";
import Vypechka2 from "../images/выпечка2 1.png";

function Vypechka() {
  const navigate = useNavigate();

  return (
    <div id="bgForPages">
      <div className="exitPages">
        <h2 onClick={() => navigate("/menu")}>&#10005;</h2>
      </div>
      <div className="pages">
        <div className="pagesImg">
          <img src={Vypechka1} alt="Vypechka" />
          <img src={Vypechka2} alt="Vypechka" />
        </div>
      </div>
    </div>
  );
}

export default Vypechka;
