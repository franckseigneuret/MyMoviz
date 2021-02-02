import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons'

const Movie = (props) => {
  const {
    name,
    desc,
    img,
    note,
    vote,
    vue,
  } = props.datas

  const [likeMovie, setLikeMovie] = useState(false)
  const [watchMovie, setWatchMovie] = useState(false)
  const [countWatchMovie, setCountWatchMovie] = useState(vue)

  const likeClass = likeMovie ? 'like' : ''
  const watchClass = watchMovie ? 'have-seen' : ''
  
  const handleWatchClick = () => {
    // console.log(watchMovie)
    setWatchMovie(!watchMovie)
    // console.log(watchMovie)
    const toggle = watchMovie ? -1 : 1
    setCountWatchMovie(countWatchMovie + toggle)
  }

  return (
    <div className="col-12 col-lg-6 col-xl-4 movie-card">
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <p>
            Like <FontAwesomeIcon icon={faHeart} className={likeClass} style={{ cursor: 'pointer' }} onClick={() => setLikeMovie(!likeMovie)} />
          </p>
          <p>
            Nombre de vue <FontAwesomeIcon icon={faVideo} 
              className={watchClass} onClick={() => handleWatchClick()} /> { countWatchMovie }
          </p>
          <p>
            Mon avis <FontAwesomeIcon icon={faStar} /> <Button>+1</Button> <Button>-1</Button>
          </p>
          <p>
            Moyenne <FontAwesomeIcon icon={faStar} /> {note}
          </p>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{desc}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Movie;
