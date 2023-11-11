import React from "react";
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

const Routes = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
            </ReactRoutes>
        </Router>
    );
};

export default Routes;