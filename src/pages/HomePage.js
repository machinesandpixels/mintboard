import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';

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
              <Col>
              <Row className="mb-5">
              <Col  className="d-flex justify-content-around">
                <div 
                    style={{ width: '780px' }} 
                    className="d-flex justify-content-around"
                  > 
                  <div className="align-self-center"> 
                    <h1>Jot Down Your Thoughts </h1> 
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
              <Col  className="d-flex justify-content-around">
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
            <div className="d-flex justify-content-center">
   
              <Image style={{ width: '150px' }} src="/images/devteam_image.jpg" roundedCircle />
    
            </div>
            </Row>

            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


            </Container>

            <Footer />
        </div>
    )
}

export default HomePage;
