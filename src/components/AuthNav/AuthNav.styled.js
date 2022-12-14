import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 30px;
  color: black;
  text-decoration: none;
  font-size: 20px;
  &.active {
    color: orange;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: blue;
  }
`;
export const Wrapper = styled.div`
margin-right: 20px;
display:flex;
gap:30px;

`;

