import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Return to homepage</Link>
    </div>
  );
}
export default NotFoundPage;
