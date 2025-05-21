import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/tmdbApi";
import MovieList from "../components/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
export default HomePage;
