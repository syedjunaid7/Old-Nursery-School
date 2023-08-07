import React from "react";
import "./Card.scss";
import cardData from "./cardData";

const Card = () => {
  return (
    <>
      {cardData?.map((item, index) => (
        <div className="portrait-card" key={index}>
          <img src={item.imgPath} alt="Card" className="card-image" />
          <div className="card-bottom">
            <h6 className="card-heading">{item.title}</h6>
            <p>{item.detail}</p>
            <button className="card-button">ReadMore</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
