import React, { useState } from 'react';
import './App.css'
import { Container, Row } from 'reactstrap'

import Movie from './components/Movie'
import NavBar from './components/NavBar'

import moviesDatas from './moviesDatas'

const App = (props) => {

  const [moviesCount, setMoviesCount] = useState(12)

  const checkMovieLiked = (isLike) => {
    const toggle = isLike ? 1 : -1
    setMoviesCount(moviesCount + toggle)
  }

  const moviesComponent = moviesDatas.map((movie, i) => {
    return <Movie key={i} datas={movie} handleCountMovie={checkMovieLiked} />
  })

  return (
    <Container>
      <Row className="py-3">
        <NavBar moviesCount={moviesCount} />
      </Row>
      <Row>
        {moviesComponent}
      </Row>
    </Container>
  );
}

export default App;
