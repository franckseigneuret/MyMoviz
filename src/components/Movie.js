import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons'

const Movie = (props) => {
  return (
    <div class="col-12 col-lg-6 col-xl-4">
      <Card>
        <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
        <CardBody>
          <p>
            Like <FontAwesomeIcon icon={faHeart} />
          </p>
          <p>
            Nombre de vue <FontAwesomeIcon icon={faVideo} /> {props.globalCountRating}
          </p>
          <p>
            Mon avis <FontAwesomeIcon icon={faStar} /> <Button>+1</Button> <Button>-1</Button>
          </p>
          <p>
            Moyenne <FontAwesomeIcon icon={faStar} /> {props.globalRating}
          </p>
          <CardTitle tag="h5">{props.movieName}</CardTitle>
          <CardText>{props.movieDesc}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Movie;
