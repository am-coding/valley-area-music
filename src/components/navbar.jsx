import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #ff9bff;
  display: flex;
  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 0rem;
    background: red;
  }
`
 
const Nav = () => {
  return (
    <StyledNav>
        <ul>
          <li>about</li>
          <li>work</li>
          <li>artists</li>
          <li>contact</li>
        </ul>
    </StyledNav>
  )
}

export default Nav;
