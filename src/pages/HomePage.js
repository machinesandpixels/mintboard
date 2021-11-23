import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Logo from '../components/Logo';

const HomePage = () => {
    return (
        <div>
            <Container style={{ width: '40rem' }}>
            <Row>
              <Col>
              <h1 className="text-dark">
                Jot down your thoughts with <span className="gradient--text"> 
                     Mintboard
                 </span> 
              </h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="d-flex justify-content-center"> 
                <Card id="card-border" style={{ width: '35rem' }}>
              <Card.Img variant="top" src="/images/whiteboard.jpeg" />
            <Card.Body>
              <Card.Title 
                className="d-flex justify-content-center">
                Try Mintboard here
                </Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the          bulk of
                the card's content.
              </Card.Text> */}
              <div className="text-center"> 
              <Button as={Link} to='/whiteboard'  className="text-dark gradient--bg">
                Click Me
              </Button>
              </div>
            </Card.Body>
                </Card>
                </div>
              </Col>
            </Row>

            <Row>
            <Col>
            1 of 2
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://imgr.search.brave.com/5sH5KI0ukbsFd2hNklHSMjsBsbnhRX5YcPeNgsnM3k8/fit/736/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/emhHZGhRSTY5REVo/a0picThydTFBSGFF/eCZwaWQ9QXBp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the          bulk of
                the card's content.
              </Card.Text>
              <Button className="logo--text">
              {/* <Button variant="primary"> */}
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
            </Col>
            <Col>
            2 of 2
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Col>
        </Row>
        <Row>
    <Col><h1>Create your Minted Image </h1></Col>
    <Col>2 of 2: See How</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3
        <Logo />
    </Col>
  </Row>
            </Container>  
        </div>
    )
}

export default HomePage;
