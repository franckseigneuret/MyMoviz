import React from 'react';
import { Nav, NavItem, Button, UncontrolledPopover, PopoverBody } from 'reactstrap';

const NavBar = (props) => {
  return (
    <Nav className="navBar">
      <NavItem>
        <img src="./img/logo.png" alt="" />
      </NavItem>
      <NavItem>
        Last release
      </NavItem>
      <NavItem>
        <Button id="PopoverClick" type="button">
          {props.moviesCount} films
        </Button>
        <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
          <PopoverBody>Nice :)</PopoverBody>
        </UncontrolledPopover>
      </NavItem>
    </Nav>
  )
}

export default NavBar;
