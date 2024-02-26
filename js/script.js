import peliculas from './peliculas.js'

const accion = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const aventura = document.getElementById('genero-12');
const urlBase = 'https://image.tmdb.org/t/p/w500';


for(let i = 0; i < peliculas.length; i++) {
    if(peliculas[i].genre_ids.some((element) => element === 28)) {
    const img = document.createElement("img")
    img.src = `https://image.tmdb.org/t/p/w500${peliculas[i].backdrop_path}`;
    const title = document.createTextNode(peliculas[i].title);
    accion.appendChild(img);
    accion.appendChild(title);
}}
for(let i = 0; i < peliculas.length; i++) {
    if(peliculas[i].genre_ids.some((element) => element === 53)) {
    const img = document.createElement("img")
    img.src = `https://image.tmdb.org/t/p/w500${peliculas[i].backdrop_path}`;
    const title = document.createTextNode(peliculas[i].title);
    thriller.appendChild(img);
    thriller.appendChild(title);
}}
for(let i = 0; i < peliculas.length; i++) {
    if(peliculas[i].genre_ids.some((element) => element === 12)) {
    const img = document.createElement("img")
    img.src = `https://image.tmdb.org/t/p/w500${peliculas[i].backdrop_path}`;
    const title = document.createTextNode(peliculas[i].title);
    aventura.appendChild(img);
    aventura.appendChild(title);
}}
   