import React from 'react'
import { Link } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <section className="navbar-section">
      <Link to="/">Dashboard</Link>
      <div className="divider-vert"></div>
      <Link to="/create">Add Checklist</Link>
      <div className="divider-vert"></div>
      <Link to="/account">Account</Link>
    </section>
  )
}
