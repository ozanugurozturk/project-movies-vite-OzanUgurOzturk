import React from "react";
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import CollectionDetails from "./CollectionDetails";
import GenreDetails from "./GenreDetails";
import CompanyDetails from "./CompanyDetails";

const Routes = ({ apiKey }) => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<MovieList apiKey={apiKey} />} />
                <Route path="/movies/:id" element={<MovieDetail apiKey={apiKey} />} />
                <Route path="/collections/:id" element={<CollectionDetails />} />
                <Route path="/genres/:id" element={<GenreDetails />} />
                <Route path="/companies/:id" element={<CompanyDetails />} />
            </ReactRoutes>
        </Router>
    );
};

export default Routes;