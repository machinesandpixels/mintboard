import React from 'react';
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
                        <Card className="text-center">
                            <Card.Header 
                                className="text-uppercase" as="h5"
                            >
                                Mintbean
                            </Card.Header>
                            <Card.Body>
                                <Card.Title 
                                        className="text-center"
                                    >
                                        Mintbean is a professional community for software developers.
                                </Card.Title>
                                <div> 
                                    <Image  
                                        src="/images/about_logo.jpeg"
                                        roundedCircle 
                                    />
                                </div>
                                <Card.Text>
    Over 5,000 members from around the world are growing their careers and skills with our free hackathons and workshops. <br />Self-taught, Bootcamp grads, CS grads. Junior, Senior and Newbies are all welcomed. 
                                </Card.Text>
                                <div>
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
