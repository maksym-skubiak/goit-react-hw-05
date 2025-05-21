import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../services/tmdbApi";
import MovieList from "../components/MovieList";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) fetchSearchMovies(query).then(setMovies);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    setSearchParams({ query: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
export default MoviesPage;
