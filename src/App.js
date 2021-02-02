import React from 'react';
import './App.css'
import { Container, Row } from 'reactstrap'

import Movie from './components/Movie'
import NavBar from './components/NavBar'
import moviesDatas from './moviesDatas'


const App = (props) => {

  const moviesComponent = moviesDatas.map((movie, i) => {
    return <Movie key={i} datas={movie} />
  })

  return ( 
    <Container>
      <Row className="py-3">
        <NavBar />
      </Row>
      <Row>
        { moviesComponent }
      </Row>
    </Container>
  );
}

export default App;
