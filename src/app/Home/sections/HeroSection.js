import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';


const HeroSection = props => {
    return (
        <section className="hero-section" id="home">
            <Container className="h-100 d-flex justify-content-center flex-column">
                <Row>
                    <Col md={6} sm={12}>
                        <h1 className="display-4 text-white d-sm-block text-center">Programming & Computing Club</h1>
                    </Col>
                </Row>
                <Row className="text-center mt-5">
                    <Col md={6} sm={12}>
                        <Button href="#projects" variant="outline-light">Our Projects</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection
