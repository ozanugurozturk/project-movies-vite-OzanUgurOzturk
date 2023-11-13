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
                <Route path="/collections/:id" component={CollectionDetails} apiKey={apiKey} />
                <Route path="/genres/:id" component={GenreDetails} apiKey={apiKey} />
                <Route path="/companies/:id" component={CompanyDetails} apiKey={apiKey} />
            </ReactRoutes>
        </Router>
    );
};

export default Routes;