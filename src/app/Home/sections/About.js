import React from 'react';
import { Container, Col, Row, Image, Card, Button } from 'react-bootstrap';
import AboutImg from './../../../assets/members.jpg';

import FacebookLogo from '../../shared/Icons/Facebook';
import GithubLogo from '../../shared/Icons/Github';
import MembersLogo from '../../shared/Icons/Members';

const About = props => {
    return (
        <section className="about" id="about">
            <h1 className="display-3 text-primary mt-5 text-center">About Us</h1>
            <Container className="h-100 d-flex mt-5 justfiy-content-center align-items-center">
                <Row>
                    <Col lg={6} className="align-self-center">
                        <Image src={AboutImg} alt="Img" fluid className="about__img " />
                    </Col>
                    <Col lg={6} >
                        <Card>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <Card.Text className="px-4  text-white text-justify">
                                    Crux is the Programming and Computing club for BITS Hyderabad.
                                    From a small club of few passionate coders since it's inception in 2010,
                                    we have grown by an enormous amount. During this time,
                                    we have aimed to kindle a passion for computers and better the
                                    programming culture of the students of our college.
                                    We also strive to make things on campus easier and more convenient via
                                    the means of code.
                                </Card.Text>
                                <div className="d-flex justify-content-around mt-5">
                                    <Button variant="outline-light" className="about__btn" href="#members">
                                        <MembersLogo className="icon" />
                                    </Button>
                                    <Button variant="outline-light" className="about__btn" href="#github">
                                        <GithubLogo className="icon" />
                                    </Button>
                                    <Button variant="outline-light" className="about__btn" href="#facebook">
                                        <FacebookLogo className="icon" />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
