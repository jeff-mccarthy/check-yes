import React from 'react'
import { Link } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <section className="navbar-section">
      <Link to="/create">Add Checklist</Link>
      <div className="divider-vert"></div>
      <Link to="/account">Account</Link>
    </section>
  )
}
