import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const userInfo = useSelector((state) => state.userLogin.userInfo)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    console.log('should log out')
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect fixed='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  <i className='fa fa-user'></i> Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
