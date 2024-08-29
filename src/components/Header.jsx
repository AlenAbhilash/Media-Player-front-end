import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import NavDropdown from 'react-bootstrap/NavDropdown';
function Headers() {
  return (
    <>
      <Navbar expand="lg" className="text-white" style={{ backgroundColor: "rgb(42, 39, 39)" }}>
        <Container >
          <Navbar.Brand href=""><img src="https://cdn-icons-png.flaticon.com/512/888/888881.png" alt="" className="text-white" style={{ width: '40px', padding: "2px", margin: "7px" }} />
            <Link style={{textDecoration:"none"}} to={'/'}>
            <span className='text-white'>  Media Player</span>   
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="text-white" >Home</Nav.Link>
              <Nav.Link href="#link" className="text-white" >Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-white'>
                <NavDropdown.Item href="#action/3.1" className="text-white" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="text-white" >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers




