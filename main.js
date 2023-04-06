import { renderMovieList } from './renderMovieList.js';

let response = await fetch('https://xn3k4w-4000.csb.app/movies');
let movies = await response.json();

let ul = renderMovieList(movies);

document.body.append(ul);
