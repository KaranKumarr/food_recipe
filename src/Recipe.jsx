import React from "react";

const Recipe = (props) => {
  const calories = Math.floor(props.calories);
  return (
    <>
      <div>
        <h1>{props.title}</h1>
        <p>{calories}</p>
        <img src={props.imgLink} alt="img" />
        <p>{props.ingredients},</p>
      </div>
    </>
  );
};

export default Recipe;
