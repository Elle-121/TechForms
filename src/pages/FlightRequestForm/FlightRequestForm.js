import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

//components
import MainContainer from '../../components/MainContainer';

export default function FlightRequestForm() {
    return(
        <MainContainer>
            <Row>
                {/*Left Content*/}
                <Col style={{ border:'1px solid'}}>
                    Left Side   
                </Col>

                {/*Center Content*/}
                <Col xs={7} className="text-center" style={{ border:'1px solid'}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <button type='button' className="hover-underline d-flex align-items-center" onClick={() => window.history.back()}>
                            <i className="bi bi-chevron-left" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                            <span style={{ color: '#EE9337', fontSize: '14px' }}>Back</span>
                        </button>

                        <button type='button' className="hover-underline d-flex align-items-center">
                            <span style={{ color: '#EE9337', fontSize: '14px' }}>Booking Details</span>
                            <i className="bi bi-chevron-right" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                        </button>
                    </div>

                </Col>

                {/*Right Content*/}
                <Col style={{ border:'1px solid'}}>
                    Right
                </Col>
            </Row>
        </MainContainer>
    )
}