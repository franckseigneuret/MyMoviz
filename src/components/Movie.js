import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ButtonGroup, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons'

import MyAdvice from './MyAdvice'

const Movie = (props) => {
  const {
    name,
    desc,
    img,
    note,
    // vote,
    vue,
  } = props.datas

  const [likeMovie, setLikeMovie] = useState(false)
  const [watchMovie, setWatchMovie] = useState(false)
  const [countWatchMovie, setCountWatchMovie] = useState(vue)
  const [myRatingMovie, setMyRatingMovie] = useState(0)

  const likeClass = likeMovie ? 'like' : ''
  const watchClass = watchMovie ? 'have-seen' : ''

  const handleWatchClick = () => {
    setWatchMovie(!watchMovie)
    const toggle = watchMovie ? -1 : 1
    setCountWatchMovie(countWatchMovie + toggle)
  }

  const setMyRating = (rating) => {
    if (rating < 0) {
      rating = 0
    }
    if (rating > 10) {
      rating = 10
    }
    setMyRatingMovie(rating)
  }

  return (
    <div className="col-12 col-lg-6 col-xl-4 movie-card">
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <div>
            Like <FontAwesomeIcon icon={faHeart} className={likeClass} style={{ cursor: 'pointer' }} onClick={() => setLikeMovie(!likeMovie)} />
          </div>
          <div>
            Nombre de vue <FontAwesomeIcon icon={faVideo}
              className={watchClass} onClick={() => handleWatchClick()} /> {countWatchMovie}
          </div>
          <div>
            Mon avis

            <MyAdvice myRatingMovie={myRatingMovie} />

            <ButtonGroup size="sm">
              <Button onClick={() => setMyRating(myRatingMovie - 1)}>-</Button>
              <Button onClick={() => setMyRating(myRatingMovie + 1)}>+</Button>
            </ButtonGroup>
          </div>
          <div>
            Moyenne <FontAwesomeIcon icon={faStar} /> {note}
          </div>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{desc}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Movie;
