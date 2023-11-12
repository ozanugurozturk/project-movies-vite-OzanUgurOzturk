import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/MovieList.css";

const MovieList = ({ apiKey }) => {
  const [movies, setMovies] = useState([]);
  const [listType, setListType] = useState("popular");

  useEffect(() => {
    let endpoint;
    if (listType === "top_rated") {
      endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    } else {
      endpoint = `https://api.themoviedb.org/3/movie/${listType}?api_key=${apiKey}&language=en-US&page=1`;
    }

    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
      });
  }, [listType, apiKey]);

  const handleListChange = (event) => {
    setListType(event.target.value);
  };

  return (
    <div className="movie-list-container">
      <label htmlFor="listType" className="list-label">
        Movie Lists:
      </label>
      <select id="listType" value={listType} onChange={handleListChange} className="list-select">
        <option value="popular">Popular</option>
        <option value="upcoming">Upcoming</option>
        <option value="now_playing">Now Playing</option>
        <option value="top_rated">Top Rated</option>
      </select>

      <div className="movie-container">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-link">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <p className="placeholder-movie-list-text">Photo is Loading...</p>
            <div className="info">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;