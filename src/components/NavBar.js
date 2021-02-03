import React from 'react';
import { Nav, NavItem, Button, UncontrolledPopover, PopoverBody, PopoverHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const WishlistMovie = ({ name, handleClickDeleteMovie }) => (
  <div>
    <span>{name}</span>
    <FontAwesomeIcon icon={faTrash} onClick={() => handleClickDeleteMovie(name)} />
  </div>
)

const NavBar = ({ moviesCount, wishlist, handleClickDeleteMovie }) => {

  const wishlistComponent = wishlist.map((item, i) => {
    return <WishlistMovie key={i} name={item} handleClickDeleteMovie={handleClickDeleteMovie} />
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
        <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
          <PopoverHeader>Wishlist</PopoverHeader>
          <PopoverBody className="wishListItems">
            {
              wishlistComponent.length > 0 ? wishlistComponent : <div>nada :)</div>
            }
          </PopoverBody>
        </UncontrolledPopover>

      </NavItem>
    </Nav>
  )
}

export default NavBar;
