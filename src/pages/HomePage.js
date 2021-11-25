import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from '../components/Jumbotron';
import Features from '../components/Features';
import { Icon } from '@iconify/react';
import Footer from '../layout/Footer';

const HomePage = () => {
    return (
        <div>
            <Container>
              <Jumbotron />
              <Features />
           
            

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
