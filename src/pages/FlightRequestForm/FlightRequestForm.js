import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, FormGroup } from 'react-bootstrap';
import React, { useState } from 'react';

//components
import MainContainer from '../../components/MainContainer';

//data
import { departments, formTypes, status, reasons } from "../Home/components/filterData";

export default function FlightRequestForm() {

    const [othersChecked, setOthersChecked] = useState(false);
    const [othersValue, setOthersValue] = useState("");

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
                            <Col className='mt-2 text-center'>
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
                                    <h3 className='tf-header mt-5'>Requestor Information</h3>
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
                                    <h3 className='tf-header mt-5'>Flight Request Details</h3>
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

                                {/* Insert "Add Additional Flier Button" here */}
                                {/* <Row>
                                    Add Additional Person
                                </Row>   */}

                            </div>
                            <div>
                                {/* Purpose of Flight */}
                                <div>
                                    <h3 className='tf-header mt-5'>Purpose of Travel</h3>
                                </div>  

                                <Row>
                                    <Col>
                                    <Form.Group className="mb-3 text-start fr-form-label">
                                        <div key={`default-checkbox`} className="mb-3">
                                            {
                                                reasons.slice(0, 6).map(item => 
                                                    <Form.Check
                                                        label={item.name}
                                                        value={item.name}
                                                        name="group1"
                                                        type="checkbox"
                                                    />        
                                                )
                                            }
                                        </div>
                                    </Form.Group>
                                    </Col>
                                    
                                    <Col>
                                    <Form.Group className="mb-3 text-start fr-form-label">
                                        <div key={`default-checkbox`} className="mb-3">
                                            {
                                                reasons.slice(6, 12).map(item => 
                                                    <Form.Check
                                                        label={item.name}
                                                        value={item.name}
                                                        name="group1"
                                                        type="checkbox"
                                                    />        
                                                )
                                            }
                                        </div>
                                    </Form.Group>
                                    </Col>
                                </Row>

                                {/* Others Checkbox and Input */}
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <div className="d-flex align-items-center">
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type="checkbox"
                                                    checked={othersChecked}
                                                    onChange={e => setOthersChecked(e.target.checked)}
                                                    className="me-2"
                                                />
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Others (Please Specify)"
                                                    disabled={!othersChecked}
                                                    value={othersValue}
                                                    onChange={e => setOthersValue(e.target.value)}
                                                    style={{ maxWidth: 300 }}
                                                />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                {/* Dates of Business */}
                                <div>
                                    <h3 className='tf-header mt-5 mb-0'>Exact Dates of Official Business</h3>
                                    <p className='sub-text'>Input the Exact START and END dates of Official Business</p>
                                </div>  
                                
                                <div className='w-50'>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Row>
                                                    <Col>
                                                        <Form.Label className='fr-form-label text-start'>Start Date</Form.Label>
                                                        <Form.Control type="date"/>
                                                    </Col>
                                                    <Col xs='auto' className='d-flex align-items-center' >
                                                        To
                                                    </Col>
                                                    <Col>
                                                        <Form.Label className='fr-form-label text-start'>End Date</Form.Label>
                                                        <Form.Control type="date"/>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </Col>    
                                    </Row>
                                </div>
                            </div>

                            <div>
                                {/* Departure */}
                                <div>
                                    <h3 className='tf-header mt-5 mb-0'>Departure</h3>
                                    <p className='sub-text'>Preffered Departure Flight Date & Time</p>
                                </div> 

                                <div>
                                    <FormGroup className='mb-3'>
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label className='fr-form-label text-start'>Date</Form.Label>
                                                <Form.Control type="date"/>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label className='fr-form-label text-start'>Time</Form.Label>
                                                <Form.Control type="time"/>
                                            </Col>
                                            <Col md>
                                                <Form.Label className='fr-form-label text-start'>Destination City/Airport</Form.Label>
                                                <Form.Control type="text" placeholder="Destination City/Airport"/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </div>
                            </div>

                            <div>
                                {/* Return */}
                                <div>
                                    <h3 className='tf-header mt-5 mb-0'>Return</h3>
                                    <p className='sub-text'>Preffered Return Flight Date & Time</p>
                                </div> 

                                <div>
                                    <FormGroup className='mb-3'>
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label className='fr-form-label text-start'>Date</Form.Label>
                                                <Form.Control type="date"/>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label className='fr-form-label text-start'>Time</Form.Label>
                                                <Form.Control type="time"/>
                                            </Col>
                                            <Col md>
                                                <Form.Label className='fr-form-label text-start'>Destination City/Airport</Form.Label>
                                                <Form.Control type="text" placeholder="Destination City/Airport"/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </div>
                            </div>

                            <div>
                                {/* Request for Extra Baggage */}
                                <div>
                                    <h3 className='tf-header mt-5 mb-2'>Request for Extra Baggage</h3>
                                </div> 

                                <Row>
                                    <Col md={5}>
                                        <FormGroup>
                                            <Form.Label className='fr-form-label text-start'>Request for Extra Baggage</Form.Label>
                                            <Form.Control type="text" placeholder="N/A"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                {/* To be Approved by */}
                                <div>
                                    <h3 className='tf-header mt-5 mb-2'>To be Approved by:</h3>
                                </div> 

                                <Row>
                                    <Col>
                                        <FormGroup className='fr-form-label'>
                                            <div key={`inline-radio`} className="mb-5">
                                                <Form.Check
                                                    inline
                                                    label="ARC"
                                                    name="group1"
                                                    type="radio"
                                                    id={`inline-radio-1`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="JDLC"
                                                    name="group1"
                                                    type="radio"
                                                    id={`inline-radio-2`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="ATP"
                                                    name="group1"
                                                    type="radio"
                                                    id={`inline-radio-3`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="DFS"
                                                    name="group1"
                                                    type="radio"
                                                    id={`inline-radio-3`}
                                                />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Form>

                    </div>
                    
                    {/* Error box */}
                    <div className='error-box mb-3'>
                        <Row>
                            <Col className='mt-2 text-center'>
                                <i className="bi bi-exclamation-triangle-fill fs-1"/>
                            </Col>
                            
                            <Col xs={10} className='text-start overflow-y-auto mt-4'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p>
                                <p>Insert comments here if rejected</p>
                            </Col>
                        </Row>
                    </div>

                    {/* Buttons */}
                    <div>
                        <button class='button-draft w-100 mb-3'>Save As Draft</button>
                        <button class='button-affirm w-100 mb-5'>Submit</button>
                    </div>

                    {/* Save Submit */}
                </Col>

                {/*Right Content Additional Form Content Goes Here*/}
                <Col>
                </Col>
            </Row>
        </MainContainer>
    )
}