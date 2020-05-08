/**
 *
 * NavLink
 *
 */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: calc(120px + 15vw);
  margin: 20px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #3041db;
  color: #3041db;
  background-color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:active {
    background: #3041db;
    color: #fff;
  }
`;

export default NavLink;
