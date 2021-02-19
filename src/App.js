import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "f30d78e3";
  const APP_KEY = "ee8bb8476c0a5128945de5c64c509aba";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("food");

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
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          ></input>
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            imgLink={recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </>
  );
};

export default App;
