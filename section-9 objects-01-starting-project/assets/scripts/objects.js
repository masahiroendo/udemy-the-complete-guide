// movieList = document.getElementById("movie-list");
// movieList.style["background-color"] = "green";
// movieList.style.display = "block";

("use strict");
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovie = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovie.forEach((movie) => {
    const movieEl = document.createElement("li");
    // if (!("info" in movie)) {
    // to check if a property exist in object
    // }

    // movieEl.textContent = movie.info.title;
    const { info, ...otherProps } = movie; // object destructuring method, use the same key-name
    console.log(otherProps);
    // const { title: movieTitle } = info; // object destructuring method, use the same key-name
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + " - ";
    // let text = getFormattedTitle.apply(movie) + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, // eq à obj = {title: title}, title qui est une variable portant le même nom que la clé
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
