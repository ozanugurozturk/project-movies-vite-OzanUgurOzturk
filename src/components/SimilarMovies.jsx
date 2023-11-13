import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import "../css/MovieDetail.css";

const SimilarMovies = ({ apiKey }) => {
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Similar movies not found: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setSimilarMovies(json.results);
      })
      .catch((error) => {
        console.error("Error fetching similar movies:", error);
        setError(true);
      });
  }, [id, apiKey]);

  if (error) {
    return (
      <div className="error-container">
        <p>Ooops!!! We could not find similar movies for the selected movie.</p>
        <Link to={`/movies/${id}`} className="back-link">
          <TiArrowBackOutline /> Back to Movie Details
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="movie-container">
        {similarMovies.map((movie) => (
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
      <div className="back-link">
        <Link to={`/movies/${id}`}>
          <TiArrowBackOutline /> Back to Movie Details
        </Link>
      </div>
    </div>
  );
};

export default SimilarMovies;