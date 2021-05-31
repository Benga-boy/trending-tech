import React, { Fragment, useState } from 'react'
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import Link from 'next/link'



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Fragment>
      <Navbar color="danger" dark expand="md" className="p-3">
        <Container>
          <Link href="/">
            <NavbarBrand className="text-info brand">LT</NavbarBrand>
          </Link>
          <NavbarToggler color="primary" onClick={toggle} />
          <Collapse color="warning" isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/">
                  <NavLink className="px-2 text-dark nav-links">
                    Home
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/login">
                  <NavLink className="px-2 text-dark nav-links">
                    Login
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/register">
                  <NavLink className="px-2 text-dark nav-links">
                    Register
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default Navigation
