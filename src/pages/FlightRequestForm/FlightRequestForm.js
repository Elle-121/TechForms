import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

//components
import MainContainer from '../../components/MainContainer';
import ProgressLadder from './components/ProgressLadder';
import FlightRequestComponent from './components/FlightRequestComponent';


export default function FlightRequestForm() {

    const home = async () => {
        window.location.href = "/";
    }

    return(
        <MainContainer>
            <Row>
                {/*Left Content*/}
                <Col className='tf-header h1 d-flex justify-content-center'>
                    <ProgressLadder/>
                </Col>

                {/*Center Content*/}
                <Col xs={7} className="text-center">
                    
                    {/* Back and Proceed Button */}
                    <div className="d-flex justify-content-between align-items-center">
                        <button type='button' className="hover-underline d-flex align-items-center" onClick={home}>
                            <i className="bi bi-chevron-left" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                            <span style={{ color: '#EE9337', fontSize: '14px' }}>Back</span>
                        </button>

                        <button type='button' className="hover-underline d-flex align-items-center">
                            <span style={{ color: '#EE9337', fontSize: '14px' }}>Booking Details</span>
                            <i className="bi bi-chevron-right" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                        </button>
                    </div>

                    {/* Flight Request Form */}
                    <FlightRequestComponent />
                </Col>

                {/*Right Content Additional Form Content Goes Here*/}
                <Col>
                </Col>
            </Row>
        </MainContainer>
    )
}