import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';



const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img width="150"
                        height="30"
                        src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/manageInventory">ManageInventory</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                            </>
                        }

                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            user ?
                                <>
                                    <h2 className='text-white fw-normal mx-3 text-warning'>{user?.displayName}</h2>
                                    <button className='btn btn-success px-3' onClick={logOut}>Signout</button>


                                </> :
                                <Nav.Link className='btn btn-primary px-3' as={Link} to='/signin'>Signin</Nav.Link>
                        }

                        {/* {user.displayName} */}


                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    );
}

export default Header;