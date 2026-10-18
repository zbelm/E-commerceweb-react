import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page-box center">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
