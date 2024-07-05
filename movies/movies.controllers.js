import { db } from './movies.mysql.js';
import {adapters} from './movies.adapter.js';
import {messages} from './movies.messages.js';

const getMovies = async (_, res)=>{
    const result = await db.getMovies()
    res.status(200).json(result)
}

const createMovie = async (req, res) => {
    const movie = adapters.movieAdapter(req.body)
    const result = await db.createMovie(movie)
    result ? res.status(201).redirect('/') : res.status(500).redirect('/')
}

const updateMovie = async(req, res) => {
    const { id } = req.params;
    const movie = adapters.movieAdapter(req.body)
    const result = await db.updateMovie( id, movie)

    result.message === '0' ? res.status(200).json(messages.message_update) : res.status(500).json({
        message: "error al actualizar la pelicula"
    })
}

const deleteMovie = async (req, res) => {
    const id = parseInt(req.params.id)
    const result = await db.deleteMovie(id)
    result.message === '0' ? res.status(200).json(messages.message_delete) : res.status(500).json({
        message: "Error al borrar la pelicula"
    })
}

export const controllers = {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
}