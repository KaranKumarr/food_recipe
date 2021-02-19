import React from "react";

const Recipe = (props) => {
  const calories = Math.floor(props.calories);
  return (
    <>
      <div className="recipe">
        <a href={props.recipeLink} className="recipe-title">
          <h1 className="recipe-title">{props.title}</h1>
        </a>

        <img src={props.imgLink} alt="img" className="image" />
        <p className="recipe-desc">{props.ingredients}</p>
        <p className="recipe-desc">Calories: {calories}</p>
      </div>
    </>
  );
};

export default Recipe;
