import React from "react";
import starFull from "../../assets/star__full.png";
import starEmpty from "../../assets/star__empty.png";

const Rating = ({ data }) => {
  const ratingScore = [1, 2, 3, 4, 5];

  const getStar = (element) => {
    if (data >= element) {
      return <img src={starFull} alt="Etoile pleine" key={element.toString()} />;
    } else {
      return <img src={starEmpty} alt="Etoile vide" key={element.toString()} />;
    }
  };

  return <React.Fragment>{ratingScore.map((element) => getStar(element))}</React.Fragment>;
};

export default Rating;