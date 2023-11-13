import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillStar } from 'react-icons/ai';
import "../css/MovieDetail.css";

const MovieDetail = ({ apiKey }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    fetch(endpoint)
      .then((res) => {
        // Check if the response is successful
        if (!res.ok) {
          throw new Error(`Movie not found: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setMovie(json);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setError(true);
      });
  }, [id, apiKey]);

  if (error) {
    return (
      <div className="error-container">
        <p>Ooops!!! We could not find the movie details that you searched for.</p>
        <Link to="/" className="back-link">
          <TiArrowBackOutline /> Back to Movies
        </Link>
      </div>
    );
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <article className="movie-detail-container">
      <div className="back-link">
        <Link to="/">
          <TiArrowBackOutline /> Back to Movies
        </Link>
      </div>
      <div
        className="background"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <div className="summary">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <p className="placeholder-text">Photo is loading...</p>
          <div className="details">
            <h1>
              <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="title-link">
                {movie.title}
              </a>{" "}
              <span className="rating"><AiFillStar className="star" /> {Math.round(movie.vote_average * 10) / 10}</span>
            </h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieDetail;