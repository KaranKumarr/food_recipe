import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "f30d78e3";
  const APP_KEY = "ee8bb8476c0a5128945de5c64c509aba";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("potatoes");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const responsive = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await responsive.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <>
      <div className="App">
        <h1 className="heading">RECIPE FINDER</h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            placeholder="Search Here"
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          ></input>
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>

        <h1
          className="recipe-title"
          style={{ color: "white", fontSize: "0.9rem" }}
        >
          Currently searching results for "{query}"
        </h1>
        <div className="main-container">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.calories}
              imgLink={recipe.recipe.image}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredientLines}
              recipeLink={recipe.recipe.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
