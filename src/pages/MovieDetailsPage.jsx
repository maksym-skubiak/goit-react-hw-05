import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/tmdbApi";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from || "/movies");

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const { title, overview, poster_path, genres } = movie;

  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>{overview}</p>
      <p>Genres: {genres.map((g) => g.name).join(", ")}</p>
      <hr />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default MovieDetailsPage;
