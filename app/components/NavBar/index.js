/**
 * NavBar
 */
import React from 'react';
import NavLink from './NavLink';
import NavDiv from './NavDiv';

function NavBar() {
  return (
    <NavDiv>
      <NavLink to="/">WORDS</NavLink>
      <NavLink to="/add">ADD WORDS</NavLink>
    </NavDiv>
  );
}

NavBar.propTypes = {};

export default NavBar;
