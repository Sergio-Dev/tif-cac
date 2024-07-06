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
    const inputSelect = document.getElementById("id_movie")

    movies.forEach(movie => {
        const opcion = document.createElement('option');

        opcion.value = `${movie.id_movie}`;
        opcion.textContent = `ID - ${movie.id_movie}` ;
        inputSelect.appendChild(opcion)
    });
};

const cargarDatosPelicula = async () => {
    const response = await fetch(`${API_SERVER}/movies`, options);
    const movies = await response.json();

    const prueba = document.getElementById("id_movie");

    prueba.addEventListener("change", (e)=>{
        const idSelected = e.target.value;
        
        const inputTitulo = document.getElementById("titulo");
        const inputDuracion = document.getElementById("duracion");
        const inputAnioEstreno = document.getElementById("fecha_estreno");
        const inputGenero = document.getElementById("genero_id");
        const inputUrlImg = document.getElementById("url_imagen");
        
        const UrlImg = document.getElementById("pelicula-img");

        movies.forEach(movie => {

            if( movie.id_movie == idSelected ){
                inputTitulo.value = `${movie.titulo}`;
                inputDuracion.value = `${movie.duracion}`;
                inputAnioEstreno.value = `${movie.fecha_estreno}`;
                inputGenero.value = movie.id_genero;
                inputUrlImg.value = `${movie.url_imagen}`;


                UrlImg.innerHTML = ""
                const ancla = document.createElement("img");
                ancla.src= `${movie.url_imagen}`;
                ancla.alt = `${movie.titulo}`;
                
                UrlImg.appendChild(ancla)
            } 
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculasTendencia();
    cargarDatosPelicula();
});

// #################################################################################################
const btnUpdate = document.getElementById("btn-update-movie");

const inputId = document.getElementById("id_movie");
const inputTitulo = document.getElementById("titulo");
const inputDuracion = document.getElementById("duracion");
const inputFechaEstreno = document.getElementById("fecha_estreno");
const inputGeneroId = document.getElementById("genero_id");
const inputUrlImagen = document.getElementById("url_imagen");

const updateMovie = (e)=>{
    e.preventDefault();

    if( 
        inputId.value.length == 0 ||
        inputTitulo.value.length == 0 ||
        inputDuracion.value.length == 0 ||
        inputFechaEstreno.value.length == 0 ||
        inputGeneroId.value.length == 0 ||
        inputUrlImagen.value.length == 0
    ){
        return alert("Uno o mas campos no se han completado")
    }

    const body = {
        titulo: inputTitulo.value,
        duracion: inputDuracion.value,
        fecha_estreno: inputFechaEstreno.value,
        genero_id: inputGeneroId.value,
        url_imagen: inputUrlImagen.value
    }

    const urlPut = "/movies/"+inputId.value
    const configPut = {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch( urlPut, configPut )
        .then(res => res.json())
        .then(res => {
            console.log(res)
            window.location.href = "/pages/admin.html";
        })
        .catch(err => alert(err))
}

btnUpdate.addEventListener('click', updateMovie);