import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
// import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <div className="navbar-container bg-secondary">
      <nav className="navbar container">
        <section className="navbar-section">
          <Link to="/"><span className="logo btn btn-primary s-circle"><i className="icon icon-check"></i> Yeah</span></Link>
        </section>
        <SignedInLinks />
        {/* <SignedOutLinks /> */}
      </nav>
    </div>
  )
}

export default withRouter(Navbar);