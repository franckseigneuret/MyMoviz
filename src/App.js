import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Movie from './components/Movie'
import NavBar from './components/NavBar'

const moviesDatas = [
  { name: 'badboy3', desc: '', img: '/img/badboy3.jpg', note: '4', vote: '29' },
  { name: 'frozen', desc: '', img: '/img/frozen.jpg', note: '4', vote: '23' },
  { name: 'jumanji', desc: '', img: '/img/jumanji.jpg', note: '5', vote: '45' },
  { name: 'maleficent', desc: '', img: '/img/maleficent.jpg', note: '3', vote: '55' },
  { name: 'once_upon', desc: '', img: '/img/once_upon.jpg', note: '5', vote: '34' },
  { name: 'starwars', desc: '', img: '/img/starwars.jpg', note: '5', vote: '45' },
  { name: 'terminator', desc: '', img: '/img/terminator.jpg', note: '4', vote: '32' },
]

const App = (props) => {

  const moviesComponent = moviesDatas.map((movie) => {
    return <Movie
      movieName={movie.name}
      movieDesc={movie.desc}
      movieImg={movie.img}
      globalRating={movie.note}
      globalCountRating={movie.vote}
    />
  })

  return (
    <div className="container">
      <div className="row py-3">
        <NavBar />
      </div>
      <div className="row">

        {moviesComponent}

      </div>
    </div>
  );
}

export default App;
