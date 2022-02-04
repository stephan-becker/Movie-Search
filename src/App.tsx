import React from "react";
import { Search } from "./Search";
import { fetchMovieInformation } from "./fetchMovieInformation";
import { MovieCard } from "./MovieCard";
import "./App.css";

function App() {
  fetchMovieInformation("Rambo", console.log);
  return (
    <div className="App">
      <h1>Movie Search</h1>
      <Search
        searchText={"Rambo"}
        onSearchSubmit={(searchText) => alert(searchText)}
      />

      <MovieCard
        movieInfo={{
          Title: "Rambo",
          Year: "2008",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
          Rated: "R",
          Ratings: [
            { Source: "Internet Movie Database", Value: "7.0/10" },
            { Source: "Rotten Tomatoes", Value: "37%" },
            { Source: "Metacritic", Value: "46/100" },
          ],
        }}
      />
    </div>
  );
}

export default App;
