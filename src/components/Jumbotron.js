import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Jumbotron = () => {
    return (
        <Fragment>
             <Row>
              <Col>
                <h1 className="gradient--text">
                    Mintboard
                </h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="d-flex justify-content-center"> 
                  <Card id="card-border" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="/images/whiteboard.jpeg" />
                    <Card.Body>
                      <Card.Title 
                    className="d-flex justify-content-center">
                        Try Mintboard here
                      </Card.Title>
                      <div className="text-center"> 
                  <Button as={Link} to='/whiteboard'  className="text-dark  gradient--bg">
                      Click Me
                  </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
        </Fragment>
    )
}

export default Jumbotron;
