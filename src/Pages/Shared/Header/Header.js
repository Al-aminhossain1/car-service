import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as button, Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../Header/images/logo.png'

const Header = () => {
    const [user,] = useAuthState(auth,);
    console.log(user)
    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={button} to="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={button} to="/about">About</Nav.Link>
                            {
                                user ? <Nav.Link onClick={handleLogout} as={button} to="">Logout</Nav.Link>
                                    : <Nav.Link as={button} to="/login">Log in</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <img style={{ width: '30Px', borderRadius: '50%' }} src={user?.photoURL} alt="" />
            </Navbar>

        </>
    );
};

export default Header;