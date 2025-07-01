// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import Header from './Header'

// const style = { 


// }

// function MainContainer({children, headerVisible = true, fluid, loading = false, activeHeader, style}) {
//   return (
//     <div className='' >
//       <div className='main-header'>
//         <Header />
//       </div>
//       <div className={`content ${style}`}>
//         <Row>
//             <Col>{children}</Col>
//         </Row>        
//       </div>
//       {/* <div className='footer'>Footer</div> */}
//     </div>
//   )
// }

// export default MainContainer'
import { Row, Col } from 'react-bootstrap'
import Header from './Header'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  header: {
    flex: '0 0 auto',
  },
  content: {
    flex: '1 1 auto',
    overflow: 'auto', // scroll if needed
    padding: '1rem',  // optional
  },
}

function MainContainer({ children, headerVisible = true }) {
  return (
    <div style={styles.container}>
      {headerVisible && (
        <div style={styles.header}>
          <Header />
        </div>
      )}

      <div style={styles.content}>
        <Row className="h-100 m-0">
          <Col className="h-100">
            {children}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MainContainer
