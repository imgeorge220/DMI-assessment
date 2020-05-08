/**
 *
 * NotificationBar
 *
 */
import styled from 'styled-components';

const NotificationBar = styled.div`
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: calc(60vw);
  margin: 20px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #3041db;
  background-color: ${props => props.color};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export default NotificationBar;
