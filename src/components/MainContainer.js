// export default MainContainer
import React from 'react'
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
    // backgroundColor: 'var(--tfblue-color)',
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

      <div 
      // className='content'
            style={styles.content}
      >
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

// const styles = {
//   // container: {}, // Remove flex and height
//   // header: {},
//   // content: {},   // Remove flex and overflow
// };

// function MainContainer({ children, headerVisible = true }) {
//   return (
//     <div>
//       {headerVisible && (
//         <div>
//           <Header />
//         </div>
//       )}
//       <div>
//         <Row className="m-0">
//           <Col>
//             {children}
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }

// export default MainContainer
