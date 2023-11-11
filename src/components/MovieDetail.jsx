import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetching the movie details using the API and update state
    // Using API key and the provided API endpoint
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY&language=en-US
    const apiKey = "c6c7c360f0f76c21a01ef7cbb4f227c7";
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <article className="movie-detail-container">
      <div className="back-link">
        <Link to="/">Back to Movies</Link>
      </div>
      {movie && (
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
            <div className="details">
              <h1>
                <span className="title">{movie.title}</span>{" "}
                <span className="rating">{Math.round(movie.vote_average * 10) / 10}</span>
              </h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default MovieDetail;