import React, { useState } from 'react';
import './App.css'
import { Container, Row } from 'reactstrap'

import Movie from './components/Movie'
import NavBar from './components/NavBar'

import moviesDatas from './moviesDatas'

const App = (props) => {
  const [wishlist, setWishList] = useState([]) // wishList = tableau de noms de film

  const checkMovieLiked = (isLike, name) => {
    if (isLike && wishlist.indexOf(name) < 0) { // si on LIKE un film et que wishList ne le contient pas 
      setWishList([...wishlist, name])          // on AJOUTE ce film dans la wishList
    } else if (!isLike && wishlist.indexOf(name) >= 0) {   // si on UN-like un film et que wishList le contient 
      setWishList(wishlist.filter(item => item !== name)) // on SUPPRIME ce film dans la wishList
    }
    //  else {
    //   setWishList(wishlist)
    // }
  }

  const moviesComponent = moviesDatas.map((movie, i) => {
    return <Movie key={i} datas={movie} handleCountMovie={checkMovieLiked} />
  })

  return (
    <Container>
      <Row className="py-3">
        <NavBar moviesCount={wishlist.length} wishlist={wishlist} />
      </Row>
      <Row>
        {moviesComponent}
      </Row>
    </Container>
  );
}

export default App;
