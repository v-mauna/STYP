import React from 'react'
import {Link} from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className="error-page">
      <img
        src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        className="error-img"
      />
      <div>
        <h2>
          Sorry, but we couldn't find that page.
          <p>Please try another request.</p>
          <Link to="/">
            <button type="button">Go Back Home</button>
          </Link>
        </h2>
      </div>
    </div>
  )
}
export default ErrorPage
