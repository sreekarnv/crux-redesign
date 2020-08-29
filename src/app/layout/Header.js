import React from 'react';
import { Navbar, Nav, Container, Button, NavbarBrand } from 'react-bootstrap';
import Logo from '../shared/Logo/Logo';
import GithubLogo from './../shared/Icons/Github';

const Header = () => {
    return (
        <Navbar expand="md" className="ml-auto fixed-top my-0 " variant="dark">
            <Container fluid={"md"}>
                <NavbarBrand>
                    <Logo className="d-md-block logo__md d-sm-block logo" />
                    <h1 className="text-white d-none d-md-block m-0">CRUX</h1>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ml-auto">
                    <Nav className="ml-auto text-center">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Button variant="info" href="#link" className="d-flex align-items-center justify-content-center">
                            <GithubLogo className="icon icon-github mr-2 fill-white" /><span>Github</span>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
