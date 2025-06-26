import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

function Layout() {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={5} className="border-end p-4">  
          <Sidebar />
        </Col>
        <Col md={7} className="p-4">
          <MainContent />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
