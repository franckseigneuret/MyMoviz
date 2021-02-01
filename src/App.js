import React from 'react';
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
        <div class="col-4">
          <Card>
            <CardImg top width="100%" src="/img/badboy3.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div class="col-4"></div>
        <div class="col-4"></div>
      </div>
    </div>
  );
}

export default App;
