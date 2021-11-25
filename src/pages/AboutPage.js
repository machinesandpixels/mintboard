import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div>
            <Container>
            <Row>
              <Col>
                <h1 className="gradient--text">
                    About
                </h1>
              </Col>
            </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AboutPage;
