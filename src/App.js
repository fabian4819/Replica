import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";
import logo from "./image/letterboxd-logo.png";
import movieImage from "./image/movie-image.jpg";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt="image"
          />
          <div className="Movie-date">release: {movie.release_date}</div>
          <div className="Movie-rate">
            <span>rate:</span> {movie.vote_average}
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar">
          <img href="#" src={logo} width="70px" />
          <a href="#" class="judul">
            Letterboxd
          </a>
          <div class="navbar-nav">
            <a href="#signin">SIGN IN</a>
            <a href="#create">CREATE ACCOUNT</a>
            <a href="#films">FILMS</a>
            <a href="#lists">LISTS</a>
            <a href="#members">MEMBERS</a>
            <a href="#journal">JOURNAL</a>
            <input
              placeholder="Search movies... "
              className="Movie-search"
              onChange={({ target }) => search(target.value)}
            />
          </div>
          <div>
            <p1 class="name">
              by :<span>Habib Fabian</span>
            </p1>
          </div>
        </nav>
      </header>
      <body>
        <img src={movieImage} width="100%" />
        <div>
          <h1 class="text">
            Track films you’ve watched. Save those you want to see. Tell your
            friends what’s good.{" "}
          </h1>
          <h1 class="text2">SCROLL DOWN </h1>
        </div>
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </body>
      <footer>
        <nav class="navbar-footer">
          <div class="navbar-nav-footer">
            <a href="#about">About</a>
            <a href="#news">News</a>
            <a href="#pro">Pro</a>
            <a href="#apps">Apps</a>
            <a href="#podcast">Podcast</a>
            <a href="#yearinreview">Year in Review</a>
            <a href="#giftguide">Gift Guide</a>
            <a href="#help">Help</a>
            <a href="#terms">Terms</a>
            <a href="#api">API</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default App;
