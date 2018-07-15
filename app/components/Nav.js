import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export const WithNav = (Component) => {
  return props => (
    <Fragment>
      <Nav {...props} />
      <Component {...props} />
    </Fragment>
  );
}

export default Nav;
