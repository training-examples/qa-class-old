import { renderMovie } from './renderMovie.js';

export function renderMovieList(movies) {
  let ul = document.createElement('ul');
  ul.classList.add('movie-list');
  for (let movie of movies) {
    let li = renderMovie(movie);
    ul.append(li);
  }
  return ul;
}
