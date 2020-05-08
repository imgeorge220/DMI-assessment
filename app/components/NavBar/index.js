/**
 *
 * NavBar
 *
 */
import React from 'react';
import NavLink from './NavLink';
import NavDiv from './NavDiv';

function NavBar() {
  return (
    <NavDiv>
      <NavLink to="/">Words List</NavLink>
      <NavLink to="/add">Add a Word</NavLink>
    </NavDiv>
  );
}

NavBar.propTypes = {};

export default NavBar;
