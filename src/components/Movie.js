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
  } = props.datas

  const [likeMovie, setLikeMovie] = useState(false)
  const [watchMovie, setWatchMovie] = useState(vote)

  const handleClickLike = () => {
    setLikeMovie(!likeMovie)
  }
  const handleClickWatch = () => {
    setWatchMovie(Number(watchMovie) + 1)
  }

  const likeClass = likeMovie ? 'like' : ''

  return (
    <div className="col-12 col-lg-6 col-xl-4 movie-card">
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <p>
            Like <FontAwesomeIcon icon={faHeart} className={likeClass} style={{ cursor: 'pointer' }} onClick={() => handleClickLike()} />
          </p>
          <p>
            Nombre de vue <FontAwesomeIcon icon={faVideo} onClick={() => handleClickWatch()} /> {watchMovie}
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
