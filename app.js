import express from 'express';
import moviesRoutes from './movies/movies.routes.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/movies', moviesRoutes)

app.use('/*', (_, res) => {
  res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => {
    console.clear()
    console.log(`Escuchando en http://localhost:${PORT}`)
})