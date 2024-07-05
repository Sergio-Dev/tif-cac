import { Router } from "express";
import { controllers } from "./movies.controllers.js";

const moviesRoutes = Router();

moviesRoutes
    .get('/', controllers.getMovies)
    .post('/', controllers.createMovie)
    .put('/:id', controllers.updateMovie)
    .delete('/:id', controllers.deleteMovie);

export default moviesRoutes;