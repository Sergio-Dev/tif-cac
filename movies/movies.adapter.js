import Movie from '../models/Movie.js'

const movieAdapter = (data) => {

    let { titulo, duracion, fecha_estreno, genero_id, url_imagen } = data

    duracion = parseInt(duracion)
    fecha_estreno = parseInt(fecha_estreno)
    genero_id = parseInt(genero_id)

    const movie = new Movie(titulo, duracion, fecha_estreno, genero_id, url_imagen)
    return movie
}

export const adapters = {
    movieAdapter
}