import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'

function MainContainer({children, headerVisible = true, fluid, loading = false, activeHeader, style}) {
  return (
    <div className='' >
      <div className='main-header'>
        <Header />
      </div>
      <div className={`content ${style}`}>
        <Row>
            <Col>{children}</Col>
        </Row>        
      </div>
      {/* <div className='footer'>Footer</div> */}
    </div>
  )
}

export default MainContainer