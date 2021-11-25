import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from '../components/Jumbotron';
import Features from '../components/Features';
import DevelopmentTeam from '../components/DevelopmentTeam';
import Footer from '../layout/Footer';

const HomePage = () => {
    return (
        <div>
            <Container>
              <Jumbotron />
              <Features />
              <DevelopmentTeam />
            </Container>
            <Footer />
        </div>
    )
}

export default HomePage;
