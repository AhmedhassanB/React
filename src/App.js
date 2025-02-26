import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import searchIcons from "./search.svg";
import MovieCard from "./MovieCard";
// fe923914
const API_URL = "https://www.omdbapi.com/?apikey=fe923914";

const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`); // will call the api
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);
  return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          type="search"
          placeholder="Search for a movie..."
          value="Superman"
          onChange={() => {}}
        />
        <img src={searchIcons} alt="search" onClick={() => {}} />
      </div>
      {movies.length > 0 ? (
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies1={movie} />
          ))}
        </div>
      ) : (
        <h2>No movies found</h2>
      )}
    </div>
  );
};
export default App;
