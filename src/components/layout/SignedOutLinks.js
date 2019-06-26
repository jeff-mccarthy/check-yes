import React from 'react'
import { Link } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <section className="navbar-section">
      <Link to="/signin">Login</Link>
      <div className="divider-vert"></div>
      <Link to="/signup">Sign Up</Link>
    </section>
  )
}
