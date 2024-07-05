const moviesContainer = document.getElementById('movies-container');
const templateMovieAdmin = (data) =>
    `
<td>${data.id_movie}</td>
<td>
    <img src="${data.url_imagen}" width="50px" alt=" imagen ${data.titulo}">
</td>
<td>${data.titulo}</td>
<td>${data.duracion}</td>
<td>${data.fecha_estreno}</td>
<td>${data.nombre_genero}</td>
<td>
    <a class="editar" href="./admin-update-movie.html" id="btn-editar" data-id="${data.id_movie}" >Editar</a>
    <a class="eliminar" href="#" id="btn-eliminar" data-id="${data.id_movie}">eliminar</a>
</td>`

const showMovies = (movies) => {
    for (let movie of movies) {
        const tr = document.createElement('tr')
        tr.innerHTML = templateMovieAdmin(movie)
        moviesContainer.append(tr)
    }
}

fetch('/movies')
    .then(res => res.json())
    .then(res => showMovies(res))
    .catch(err => console.log(err))