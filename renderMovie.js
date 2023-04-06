export function renderMovie(movie) {
  let li = document.createElement('li');

  let img = document.createElement('img');
  img.src = movie.poster_path;
  img.alt = movie.title;
  li.append(img);

  // Putting the title and paragraph in a div for layout
  let div = document.createElement('div');

  let h4 = document.createElement('h4');
  h4.append(movie.title);
  div.append(h4);

  let p = document.createElement('p');
  p.append(movie.overview);
  div.append(p);

  li.append(div);
  return li;
}
