import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../layout/Footer';
import Hr from '../components/Hr';

const AboutPage = () => {
    return (
        <div>
        <Container className="mb-5">
            <Row>
              <Col>
                <h1 className="gradient--text">
                    About
                </h1>
              </Col>
            </Row>
            
            <Row>
                <Col>
                    <div className="d-flex justify-content-center"> 
                        <Card>
                            <Card.Header 
                                className="text-center text-uppercase" as="h5"
                            >
                                Mintbean
                            </Card.Header>
                            <Card.Body>
                                <Card.Title 
                                        className="text-center"
                                    >
                                        Mintbean is a professional community for software developers.
                                </Card.Title>
                                <div className="text-center"> 
                                    <Image  
                                        src="https://imgr.search.brave.com/w3aX0trlvYQ8J5uB0gvfWaYlc275Ar5P3GD9IxKXKio/fit/160/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/T05NY1lsM2F3c0pK/ZGdEVkd0T2xRQUFB/QSZwaWQ9QXBp"
                                        roundedCircle 
                                    />
                                </div>
                                <Card.Text className="text-center">
    Over 5,000 members from around the world are growing their careers and skills with our free hackathons and workshops. <br />Self-taught, Bootcamp grads, CS grads. Junior, Senior and Newbies are all welcomed. 
                                </Card.Text>
                                <div className="text-center">
                                
                                    <Button 
                                        href={'https://mintbean.io/'}
                                        target="_blank" 
                                        rel="noopener noreferrer"  className="text-light gradient--bg">
                                            Join The Community
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>

        <Hr />

        <Footer />
        </div>
    )
}

export default AboutPage;
