import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/MovieList.css";

const MovieList = ({ apiKey }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

        fetch(endpoint)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.results);
            });
    }, []);

    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <p className="placeholder-text">Photo is Loading...</p>
                    <div className="info">
                        <h1>{movie.title}</h1>
                        <p>Released {movie.release_date}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;