import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Navigation from '../common/Navbar'
import { Container, Row } from 'reactstrap'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Row>
          {children}
        </Row>
      </Container>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
