import React, { useState } from 'react';
import { Container, Row } from 'reactstrap'
import './App.css'

import Movie from './components/Movie'
import NavBar from './components/NavBar'

import moviesDatas from './moviesDatas'

const App = (props) => {
  const [wishlist, setWishList] = useState([]) // wishList = tableau de noms de film

  const checkMovieLiked = (isLiked, name) => {
    if (isLiked && wishlist.indexOf(name) < 0) { // si on LIKE un film et que wishList ne le contient pas 
      setWishList([...wishlist, name])          // on AJOUTE ce film dans la wishList
    } else if (!isLiked && wishlist.indexOf(name) >= 0) {   // si on UN-like un film et que wishList le contient 
      setWishList(wishlist.filter(item => item !== name)) // on SUPPRIME ce film dans la wishList
    }
  }

  // Suppression film de la wishList au clic poubelle
  const handleClickDeleteMovie = (name) => {
    setWishList(wishlist.filter(item => item !== name))
  }

  const moviesComponent = moviesDatas.map((movie, i) => {
    const isWished = wishlist.indexOf(movie.name) >= 0 ? true : false
    return <Movie key={i} isWished={isWished} datas={movie} handleCountMovie={checkMovieLiked} />
  })

  return (
    <Container>
      <Row className="py-3">
        <NavBar moviesCount={wishlist.length} wishlist={wishlist} handleClickDeleteMovie={handleClickDeleteMovie} />
      </Row>
      <Row>
        {moviesComponent}
      </Row>
    </Container>
  );
}

export default App;
