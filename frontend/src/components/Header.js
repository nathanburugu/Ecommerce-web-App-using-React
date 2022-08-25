import React from 'react'
// import {Link } from 'react-router-dom'
import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <header>
       <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
           
                <Navbar.Brand >myShop</Navbar.Brand>
            
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <NavbarBrand to='/cart'><Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link></NavbarBrand>
            <NavbarBrand to='/login'><Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link></NavbarBrand>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Header
