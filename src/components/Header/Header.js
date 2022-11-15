import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegis = () => {
        navigate('/regis')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">To do Quiz</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'> To do Quiz </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'> Home </NavLink>
                        <NavLink to="/users" className='nav-link'> Users </NavLink>
                        <NavLink to="/admins" className='nav-link'> Admin </NavLink>
                    </Nav>
                    <Nav>
                        <button onClick={handleLogin} className='btn-login'>Log in</button>
                        <button onClick={handleRegis} className='btn-signup'>Sign up</button>

                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >Log in</NavDropdown.Item>
                            <NavDropdown.Item >Log Out</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;