import React from 'react'
import { Link } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <section className="navbar-section">
      <Link to="/signup">Login</Link>
      <div className="divider-vert"></div>
      <Link to="/signin">Sign Up</Link>
    </section>
  )
}
