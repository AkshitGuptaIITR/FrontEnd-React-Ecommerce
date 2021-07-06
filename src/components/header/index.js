import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';//This from the bootstrap library helps to create the dashboard from the react bootstrap library.
import { useSelector,useDispatch } from 'react-redux';
import { Link, NavLink, Redirect } from "react-router-dom";
import { signout } from '../../actions';
const Header = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const logout = () => {
    dispatch(signout());
    return(
      <Redirect to="/" />
    )
  }

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
        <li className="nav-item">
          <span className="nav-link" onClick={() => logout()}>SignOut</span>
        </li>
      </Nav>  
    )
  }

  const renderNonLoggedInLinks = () =>{
    return (
      <Nav>
        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
        <li className="nav-item">
          <NavLink to="signin" className="nav-link">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="signup" className="nav-link">Signup</NavLink>
        </li>
      </Nav>
    )
  }

  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: '1' }}>
        <Container fluid>
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
            </Nav>

            {/* auth.authenticate is used to check weather the user is logeed in or not */}

            {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

