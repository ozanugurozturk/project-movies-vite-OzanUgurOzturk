import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details using the API and update state
    // Use your API key and the provided API endpoint
    // Example: https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY&language=en-US
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;