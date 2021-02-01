import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Nav, NavItem, NavLink,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const App = (props) => {
  return (
    <div class="container">
      <div class="row">
        <img src="./img/logo.png" alt="" />
        <Nav>
          <NavItem>
            <NavLink href="#">Last release</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">11 films</NavLink>
          </NavItem>
        </Nav>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4">
          <Card>
            <CardImg top width="100%" src="/img/badboy3.jpg" alt="Card image cap" />
            <CardBody>
              <p>Like</p>
              <p>Nombre de vue</p>
              <p>Mon avis <Button>+1</Button> <Button>-1</Button></p>
              <p>Moyenne</p>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
