import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header(){
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand="lg">
                <Container>
                    {/* Brand section */}
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>

                    {/* Links next to the brand */}
                    <Nav className="me-auto">
                        <Nav.Link href="#Notification">Notification</Nav.Link>
                        <Nav.Link href="#Forum">Forum</Nav.Link>
                    </Nav>

                    {/* Toggle for mobile view */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Right-aligned text */}
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}