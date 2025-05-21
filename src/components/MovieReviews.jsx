import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../services/tmdbApi";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>
            <b>{review.author}:</b> {review.content}
          </p>
        </li>
      ))}
    </ul>
  );
}
export default MovieReviews;
