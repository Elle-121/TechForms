import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Layout({ sidebar, main }) {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={5} className="border-end p-4">
          {sidebar}
        </Col>
        <Col md={7} className="p-4">
          {main}
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
