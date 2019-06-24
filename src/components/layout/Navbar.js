import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <div className="navbar-container bg-secondary py-2">
      <nav className="navbar container">
        <section className="navbar-section">
          <Link to="/"><span className="btn btn-primary s-circle"><i className="icon icon-check"></i></span></Link>
        </section>
        <SignedInLinks />
        <SignedOutLinks />
      </nav>
    </div>
  )
}

export default withRouter(Navbar);