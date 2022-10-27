import React from "react";
import "./Healthcard.scss";

function Healthcard({ type, image, currentval, maxval, color, units }) {
  return (
    <div className="card">
      <div className="card_top">
        <img src={image} className="type_image" />
        <h4>{type}</h4>
      </div>
      <div className="card_center">
        <h1>
          {currentval}
          <span>/{maxval}</span>
        </h1>
      </div>
      <div className="card_bottom">{units}</div>
    </div>
  );
}

export default Healthcard;
