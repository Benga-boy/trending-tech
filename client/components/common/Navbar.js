import React, { useState } from 'react'
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="warning" expand="md" className="p-3">
      <Container>
        <NavbarBrand>LT</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="px-2">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="px-2">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="px-2">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="px-2">Home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
