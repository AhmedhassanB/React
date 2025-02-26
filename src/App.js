import React from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcons from "./searchMovies";
// fe923914
const API_URL = "https://www.omdbapi.com/?apikey=fe923914";
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`); // will call the api
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);
  return (
    <div className="App">
      <h1>Movie Land</h1>
    </div>
  );
};
export default App;
