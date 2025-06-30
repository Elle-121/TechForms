import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';

//components
import MainContainer from '../../components/MainContainer';

//data
import { departments, formTypes, status, reasons } from "../Home/components/filterData";

export default function FlightRequestForm() {
    return(
        <MainContainer>
            <Row>
                {/*Left Content*/}
                <Col>
                    Left Side   
                </Col>

                {/*Center Content*/}
                <Col xs={7} className="text-center">
                    
                    {/* Back and Proceed Button */}
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

                    {/* Warning/Remarks Box */}
                    <div className='remarks-box'>
                        <Row>
                            <Col className='mt-2'>
                                <i className="bi bi-exclamation-triangle-fill fs-1"></i>
                            </Col>
                            
                            <Col xs={10} className='text-start overflow-y-auto mt-4'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p>
                                <p>Insert comments here if rejected</p>
                            </Col>
                        </Row>
                    </div>

                    {/* Form Header */}
                    <div>
                        <div className='form-h1'>
                            <h1 className='tf-header d-flex justify-content-start' style={{ color: 'black' }}>TFI Request for Flight</h1>
                        </div>

                        <div>
                            <p className='text-start'>The <span className='fw-bold'>Request for Flight Form</span> is a mandatory document that employees must complete and submit <span className='fw-bold'>5 to 7 days</span> before the requested flight date. This form ensures proper scheduling, approval, and processing of flight requests. <span className='fw-bold'>Failure to submit</span> the form within the required timeframe will result in the request <span className='fw-bold'>not being processed</span> and may lead to <span className='fw-bold'>disciplinary action</span>. Employees are expected to comply with this policy to avoid disruptions in travel arrangements.</p>
                            <p className='text-start'>When you submit this form, the owner will see your name and email address.</p>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className='text-start'>
                        <Form>

                            {/* Requestor Details */}
                            <div>
                                <div className='form-h2'>
                                    <h3 className='tf-header'>Requestor Information</h3>
                                </div>

                                <Row className='mb-2'>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Requestor Employee Name</Form.Label>
                                            <Form.Control type="text" placeholder="Name of Requestor" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='fr-form-label' controlId="formBasicEmail">
                                            <Form.Label className='fr-form-label'>Company Email</Form.Label>
                                            <Form.Control type="text" placeholder="email@techfactors.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group>
                                        <Form.Label className='fr-form-label'>Department</Form.Label>
                                        <Form.Select>
                                            <option>Select Department</option>
                                            {
                                                departments.map(item => 
                                                    <option value={item.name}>{item.name}</option>        
                                                )
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                            </div>

                            {/* Flight Request Details */}
                            <div>
                                <div className='form-h2'>
                                    <h3 className='tf-header'>Flight Request Details</h3>
                                </div>

                                <Row className='mb-2'>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Middle Name</Form.Label>
                                            <Form.Control type="text" placeholder="Middle Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Birthday</Form.Label>
                                            <Form.Control type="date"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Extensions</Form.Label>
                                            <Form.Control type="text" placeholder="Suffix" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Title</Form.Label>
                                            <Form.Control type="text" placeholder="Mr./Ms." />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* Add Additional Flier Button */}
                                <Row>
                                    Add Additional Person
                                </Row>                            
                            </div>

                        </Form>
                    </div>
                </Col>

                {/*Right Content*/}
                <Col>
                    Right
                </Col>
            </Row>
        </MainContainer>
    )
}