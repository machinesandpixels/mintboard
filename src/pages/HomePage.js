import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Icon } from '@iconify/react';
import Footer from '../layout/Footer';

const HomePage = () => {
    return (
        <div>
            <Container>
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

            <Row>
              <Col>
                <h1 className="gradient--text">
                  Features
                </h1>
              </Col>
            </Row>
            
            <Row className="gradient--bg">
              <Col className="mt-5 mb-5">
              <Row className="mb-5">
              <Col  className="d-flex justify-content-around mt-5">
                <div 
                    style={{ width: '780px' }} 
                    className="d-flex justify-content-around"
                  > 
                  <div className="align-self-center"> 
                    <h1> Express Yourself </h1> 
                  </div>
                  <div> 
                    <Image src="https://imgr.search.brave.com/5sH5KI0ukbsFd2hNklHSMjsBsbnhRX5YcPeNgsnM3k8/fit/736/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/emhHZGhRSTY5REVo/a0picThydTFBSGFF/eCZwaWQ9QXBp" rounded /> 
                  </div>
                </div>
              </Col>
              </Row>

              <Row className="mb-5">
              <Col  className="d-flex justify-content-around">
                <div 
                    style={{ width: '780px' }} 
                    className="d-flex justify-content-around"
                  > 
                  <div> 
                    <Image className="mr-5" src="https://imgr.search.brave.com/5sH5KI0ukbsFd2hNklHSMjsBsbnhRX5YcPeNgsnM3k8/fit/736/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/emhHZGhRSTY5REVo/a0picThydTFBSGFF/eCZwaWQ9QXBp" rounded /> 
                  </div>
                  <div className="align-self-center"> 
                    <h1>Change Your Mind</h1> 
                  </div>
                </div>
              </Col>
              </Row>
          
              <Row>
              <Col  className="d-flex justify-content-around mb-5">
                <div 
                    style={{ width: '780px' }} 
                    className="d-flex justify-content-around"
                  > 
                  <div className="align-self-center"> 
                    <h1> Even Choose A Color </h1> 
                  </div>
                  <div> 
                    <Image src="https://imgr.search.brave.com/5sH5KI0ukbsFd2hNklHSMjsBsbnhRX5YcPeNgsnM3k8/fit/736/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/emhHZGhRSTY5REVo/a0picThydTFBSGFF/eCZwaWQ9QXBp" rounded /> 
                  </div>
                </div>
              </Col>
              </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <h1 className="gradient--text">
                  Development Team
                </h1>
              </Col>
            </Row>

            <Row>
                <Col className="mb-5">
                    <div className="d-flex justify-content-center"> 
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title 
                                        className="text-center"
                                    >
                                      Jesus Quezada
                                </Card.Title>
                                <div> 
                                <Image className="mt-3 mb-3" style={{ width: '150px' }} src="/images/devteam_image.jpg" roundedCircle />
                                </div>
                                <Card.Text style={{ width: '400px', padding: '1.5rem' }}>
   Hi, there! I'm a self-taught Web Developer and Bootcamp Grad. And Although, I didn't start programming until my late twenties. I really do think it's an exciting time to begin a Development Career. 
   With Web 3, VR, and Self Driving Cars on the horizon. I think it's the perfect time to discover "Hello World."
                                </Card.Text>
                                <hr />
                                <Badge className="mt-3 mb-3" bg="light" text="dark">
    Feel free to connect with me
  </Badge>
                                <div 
                                 > 
                             
                            
                                <Button
                                variant="light"
                                 href={'https://www.linkedin.com/in/quezadajesus'}
                                 target="_blank" 
                                 rel="noopener noreferrer"  
                                >
                                <Icon
                                icon="logos:linkedin"
                                className="tt" 
                                />
                              </Button>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-muted"></Card.Footer>
                        </Card>
                    </div>
                </Col>
            </Row>
          


            </Container>

            <Footer />
        </div>
    )
}

export default HomePage;
