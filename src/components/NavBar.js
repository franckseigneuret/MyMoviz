import React from 'react';
import { Nav, NavItem, Button, UncontrolledPopover, PopoverBody } from 'reactstrap';


const WishlistMovie = ({ name }) => (
  <div>{name}</div>
)

const NavBar = ({ moviesCount, wishlist }) => {

  const wishlistComponent = wishlist.map((item, i) => {
    return <WishlistMovie key={i} name={item} />
  })

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
          {moviesCount} film{moviesCount > 1 ? 's' : ''}
        </Button>
        {
          wishlist.length > 0 ?
            <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
              <PopoverBody>
                {wishlistComponent}
              </PopoverBody>
            </UncontrolledPopover>
            : ''
        }
      </NavItem>
    </Nav>
  )
}

export default NavBar;
