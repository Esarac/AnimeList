import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import store from '../config/redux/store'
import {userActions} from '../config/redux/userSlice'

function Header() {

  const logOut = () => {
    store.dispatch(userActions.logOut())
    window.location.reload();
  }

  return (
    <Navbar bg="dark" expand="lg" className='text-light text-monaco'>
      <Container>
        <Navbar.Brand className='text-light' href="/">AnimeList</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {store.getState().actual !== null?
              <>
                <Nav.Link href="/fav" className="text-light">Favorites</Nav.Link>
                <Nav.Link className="text-light" onClick={logOut}>Log out</Nav.Link>
              </>:
              <>
                <Nav.Link href="/login" className="text-light">Log in</Nav.Link>
                <Nav.Link href="/signin" className="text-light">Sign in</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header