/**
 * NavBar
 */
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Link to="/">WORDS</Link>
      <Link to="/add">ADD WORD</Link>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
