import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../services/tmdbApi";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.cast_id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
}
export default MovieCast;
