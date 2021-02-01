import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  return (
    <div>
      <img src="./img/logo.png" alt="" />
        <Nav>
          <NavItem>
            <NavLink href="#">Last release</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">11 films</NavLink>
          </NavItem>
        </Nav>
    </div>
  )
}

export default NavBar;
