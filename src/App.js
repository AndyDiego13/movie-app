import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import Amplify, { API } from "amplify";
import handler from 'index.js'

const my_API = 'api375b2f21'

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=988986d7";
const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Batman");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${my_API}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
  
    return (
      <div className="app">
        <h1>MovieLand</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
  
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
        <div className="empty">
          <button onClick={() => handler()}>Reciba su orden de peliculas</button>
        </div>
      </div>

    );
  };
  
  export default App;
