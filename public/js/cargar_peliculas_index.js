const API_SERVER = 'https://devsergio.alwaysdata.net';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};

const cargarPeliculasTendencia = async () => {
    const response = await fetch(`${API_SERVER}/movies`, options);
    const movies = await response.json();
    const tendenciasContainer = document.querySelector('.peliculasTendencia .peliculas');
    
    tendenciasContainer.innerHTML = '';

    movies.forEach(movie => {
        const ancla = document.createElement('a');
        ancla.href = './pages/detalle.html';

        const pelicula = document.createElement('div');
        pelicula.classList.add('pelicula');
        
        const img = document.createElement('img');
        img.classList.add('imgTendencia');
        img.src = `${movie.url_imagen}`;
        img.alt = movie.titulo;
        img.loading = 'lazy';
        
        const tituloPelicula = document.createElement('div');
        tituloPelicula.classList.add('tituloPelicula');
        
        const titulo = document.createElement('h4');
        titulo.textContent = movie.titulo;

        ancla.appendChild(pelicula);
        pelicula.appendChild(img);
        pelicula.appendChild(tituloPelicula);
        tituloPelicula.appendChild(titulo);

        tendenciasContainer.appendChild(ancla);      
    });
};

document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculasTendencia();
});