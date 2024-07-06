const form = document.getElementById("form-registro");

const inputTitulo = document.getElementById("titulo");
const inputDuracion = document.getElementById("duracion");
const inputFechaEstreno = document.getElementById("fecha_estreno");
const inputGeneroId = document.getElementById("genero_id");
const inputUrlImagen = document.getElementById("url_imagen");

form.addEventListener("submit", (e) => {
    if( 
        inputTitulo.value.length === 0 ||
        inputDuracion.value.length === 0 ||
        inputFechaEstreno.value.length === 0 ||
        inputGeneroId.value.length === 0 ||
        inputUrlImagen.value.length === 0
    ){
        e.preventDefault()
        return alert("Uno o mas campos no se han completado")
    }
})