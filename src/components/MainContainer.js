import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'
import Layout from './Layout'

function MainContainer({children, headerVisible = true, fluid, loading = false, activeHeader, style}) {
  return (
    <React.Fragment>
      {headerVisible && <Header activeHeader={activeHeader} />}
      <Layout fluid={fluid} loading={loading} style={style}>
        {children}
      </Layout>
    </React.Fragment>
  )
}

export default MainContainer
