import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies using the API and update state
    // Use your API key and the provided API endpoint
    // Example: https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;