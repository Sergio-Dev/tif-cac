import { connection } from "../db/mysql.connetion.js";

const getMovies = async () => {
    try {
        const query = `SELECT p.id_movie, p.titulo, p.duracion, p.fecha_estreno, p.genero_id AS id_genero, g.genero AS nombre_genero, p.url_imagen
        FROM movies as p
        JOIN genres as g ON p.genero_id = g.id_genre;`

        const [result] = await connection.promise().query(query)
        return result
    }
    catch (err) { 
        return [] 
    }
}

const createMovie = async (movie) => {
    try {
        const { titulo, duracion, fecha_estreno, genero_id, url_imagen } = movie
        const fields = [titulo, duracion, fecha_estreno, genero_id, url_imagen]

        const query = `INSERT INTO movies VALUES (NULL,?,?,?,?,?)`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0
    }
    catch (err) { 
        return false 
    }
}

const updateMovie = async (id, movie) => {
    try {
        
        const { titulo, duracion, fecha_estreno, genero_id, url_imagen } = movie;
        const fields = [titulo, duracion, fecha_estreno, genero_id, url_imagen, parseInt(id)];
        const query = `UPDATE movies SET titulo=?, duracion=?, fecha_estreno=?, genero_id=?, url_imagen=? WHERE id_movie=?`
        
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0 ? Error(0) : Error(1)

    } catch (error) {
        return Error(10)
    }
}

const deleteMovie = async (id) => {
    try {
        const query = `DELETE FROM movies WHERE id_movie = ?`
        const [result] = await connection.promise().query(query, id)
        
        return result.affectedRows > 0 ? Error(0) : Error(1)
    }
    catch (err) { return Error(10) }
}

export const db = {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
}