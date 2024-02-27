import peliculas from './peliculas.js'

const accion = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const aventura = document.getElementById('genero-12');
const urlBase = 'https://image.tmdb.org/t/p/w500';


for(let i = 0; i < peliculas.length; i++) {
    if(peliculas[i].genre_ids.some((element) => element === 28)) {
        const div = document.createElement("div");
        const img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}`;
        const title = document.createElement("h3");
        title.innerHTML = peliculas[i].title;
        div.class = 'pelicula';
        div.id = title;
        div.appendChild(img);
        div.appendChild(title);
        accion.appendChild(div);
        
}}
for(let i = 0; i < peliculas.length; i++) {
    if(peliculas[i].genre_ids.some((element) => element === 53)) {
        const div = document.createElement("div");
        const img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}`;
        const title = document.createElement("h3");
        title.innerHTML = peliculas[i].title;
        div.class = 'pelicula';
        div.id = title;
        div.appendChild(img);
        div.appendChild(title);
        thriller.appendChild(div);
        
}}
for(let i = 0; i < peliculas.length; i++) {
    if(peliculas[i].genre_ids.some((element) => element === 12)) {
        const div = document.createElement("div");
        const img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}`;
        const title = document.createElement("h3");
        title.innerHTML = peliculas[i].title;
        div.class = 'pelicula';
        div.id = title;
        div.appendChild(img);
        div.appendChild(title);
        aventura.appendChild(div);

}}
   