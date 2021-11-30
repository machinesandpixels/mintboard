import React, { Fragment } from 'react';
import Hr from './Hr';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Icon } from '@iconify/react';

const Challenge = () => {
    return (
        <Fragment>
        <Row>
      <Col >
        <h1 className="gradient--text">
            Hackathon Challenge
        </h1>
      </Col>
    </Row>

    <Row>
        <Col className="mb-5">
            <div className="d-flex justify-content-center"> 
                <Card className="text-center p-4" style={{ width: '55rem' }}>
                    <Card.Body>
                        <Card.Title 
                                className="text-center mb-4"
                            >
                                 <h4>
                                <Badge bg="secondary">
                                Hiring Hackathon for Jr Web Devs
                                </Badge>
                            </h4>
                              
                        </Card.Title>
                    
                        <Card.Text>
                        <p className="challenge--text">
                            Build an app that lets people express their creativity in a visual format. You can build ANY application you'd like. Whether it's a blank canvas that you can paint on, a photo-editing app, a shared white board. 
                        </p>
                       

                        <div className="mt-3 challenge--text">
                            <h5 className="yy">
                                <Badge id="yy" bg="secondary">
                            As long as it fulfills one OR both
                                </Badge>
                            </h5>
                        </div>

                        <div className="d-flex flex-column mt-3">
                        <ul>
                            <p className="mb-2"> 
                            As a user, I can drag my mouse across the screen to make free-form lines. 
                            </p>
                            <p className="mb-2"> 
                            As a user, I can click areas of the screen with my mouse to fill them with a color, texture or pattern. 
                            </p>
                        </ul>
                        </div>
                        </Card.Text>
                            <hr />
                        <Card.Text>
                            <p className="mt-3"> 
                            You can have up to 3 members on a team if you have a designer on your team 
                            </p>
                        <h5 >
                            <Badge className="mt-2 mb-2" bg="secondary">
                               Team Examples
                            </Badge>
                        </h5>
                      
                       <div className="d-flex flex-column"> 
                       <p>  One UX/UI designer, and two developers </p>
                       <p> 
                           You can pair with a friend, with the power of two developers 
                        </p>
                       <p>  
                           And alternatively, there is always room for a party of one dev 
                        </p>
    
                        </div>
                     
                        <p className="opacity--bg"> 
                            Please note, teams of 3 developers are no longer allowed
                        </p>
                        </Card.Text>
                        
                        <Badge className="mt-3 mb-3" bg="light" text="dark">
                            Built With
                        </Badge>
                        <div className="challenge--icons"> 
        
                            <Icon
                            className="p-1"
                            icon="logos:react"
                            />
                            <Icon
                            className="p-1"
                            icon="logos:javascript"
                            />

                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    </Row>
</Fragment>
    )
}

export default Challenge;
