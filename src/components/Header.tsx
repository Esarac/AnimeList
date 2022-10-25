import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'

function Header() {
  return (
    <Navbar bg="dark" expand="lg" className='text-light text-monaco'>
      <Container>
        <Navbar.Brand className='text-light' href="/">AnimeList</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/fav" className="text-light">Favoritos</Nav.Link>
            <Nav.Link href="/login" className="text-light">Log in</Nav.Link>
            <Nav.Link href="/signin" className="text-light">Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header