document.addEventListener('DOMContentLoaded', (e)=> {
    e.preventDefault();

    const tabla = document.getElementById('table-id');
    tabla.addEventListener('click', (e)=>{
        e.preventDefault();
        const btn = e.target;

        if (btn.classList.contains('editar')) {
            window.location.href = "/pages/admin-update-movie.html";
        }
        
        if (btn.classList.contains('eliminar')) {
            const idMovie = btn.getAttribute('data-id');
            const respuesta = confirm(`¿Quiere eliminar la pelicula ID=${idMovie}?`);

            if(respuesta){
                const url = '/movies/'+idMovie

                fetch(url, { method: "DELETE" })
                    .then(res => res.json())
                    .then(() => {
                        alert("Se borro la pelicula correctamente")
                        window.location.href = "/pages/admin.html";
                    })
                    .catch(err => alert(err))
            }
        }
    })
})