import React from "react";
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import SimilarMovies from "./SimilarMovies";

const Routes = ({ apiKey }) => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<MovieList apiKey={apiKey} />} />
                <Route path="/movies/:id" element={<MovieDetail apiKey={apiKey} />} />
                <Route path="/movies/:id/similar" element={<SimilarMovies apiKey={apiKey} />} />
            </ReactRoutes>
        </Router>
    );
};

export default Routes;