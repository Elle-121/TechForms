import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, FormGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

//components
import MainContainer from '../../components/MainContainer';
import ProgressLadder from './components/ProgressLadder';

//data
import { departments, formTypes, status, reasons } from "../Home/components/filterData";

export default function FlightRequestForm() {

    const [othersChecked, setOthersChecked] = useState(false);
    const [othersValue, setOthersValue] = useState("");

    const { register, handleSubmit, reset } = useForm({
            defaultValues: {
                requestor: '',
                email: '',
                department: '',
                first_name1: '',
                middle_name1: '',
                last_name1: '',
                birthday1: '',
                extensions1: '',
                title1: '',
                form_type: '',
                purpose: '',
                purpose_others: '',
                departure_city: '',
                departure_date: '',
                departure_time: '',
                return_city: '',
                return_date: '',
                return_time: '',
                start_business: '',
                end_business: '',
                extra_baggage: '',
                approved_by: ''
            }
    })
    
    const resetValues = () => {
        reset()
    }

    const submitValues = (values) => {
        console.log(values)
    }

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

                    {/* Warning/Remarks Box */}
                    <div className="form-box form-box-remarks mb-3 w-100 d-flex align-items-center py-3 px-4 gap-4">
                        <i className="bi bi-exclamation-triangle-fill fs-1"/>
                        <p className='text-start m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p>
                        {/* <p className='text-start m-0'>Remarks here.</p> */}
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
                        <Form onSubmit={handleSubmit(submitValues)}>

                            {/* Requestor Details */}
                            <div>
                                <div className='form-h2'>
                                    <h3 className='tf-header mt-5'>Requestor Information</h3>
                                </div>

                                <Row className='mb-2'>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Requestor Employee Name</Form.Label>
                                            <Form.Control {...register("requestor")} type="text" placeholder="Name of Requestor" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='fr-form-label' controlId="formBasicEmail">
                                            <Form.Label className='fr-form-label'>Company Email</Form.Label>
                                            <Form.Control {...register("email")} type="text" placeholder="email@techfactors.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group>
                                        <Form.Label className='fr-form-label'>Department</Form.Label>
                                        <Form.Select {...register("department")}>
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
                                            <Form.Control {...register("first_name1")} type="text" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Middle Name</Form.Label>
                                            <Form.Control {...register("middle_name1")} type="text" placeholder="Middle Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Last Name</Form.Label>
                                            <Form.Control {...register("last_name1")} type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mb-4'>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Birthday</Form.Label>
                                            <Form.Control {...register("birthday1")} type="date"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Extensions</Form.Label>
                                            <Form.Control {...register("extensions1")} type="text" placeholder="Suffix" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Title</Form.Label>
                                            <Form.Control {...register("title1")} type="text" placeholder="Mr./Ms." />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* Add Additional Flier Button */}
                                <Row>
                                    <Col className='d-flex justify-content-end align-items-center'>
                                        <span style={{color:'var(--tforange-color)', marginRight: '24px', fontSize: '24px'}}>Add additional person</span>
                                        <button className="add-btn" type='button'>+</button>
                                    </Col>
                                </Row>

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
                                                    <Form.Check {...register("purpose")}
                                                        label={item.name}
                                                        value={item.name}
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
                                                    <Form.Check {...register("purpose")}
                                                        label={item.name}
                                                        value={item.name}
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
                                                    type="checkbox"
                                                    checked={othersChecked}
                                                    onChange={e => setOthersChecked(e.target.checked)}
                                                    className="me-2"
                                                />
                                                <Form.Control {...register("purpose_others")}
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
                                                        <Form.Control {...register("start_business")} type="date"/>
                                                    </Col>
                                                    <Col xs='auto' className='d-flex align-items-center' >
                                                        To
                                                    </Col>
                                                    <Col>
                                                        <Form.Label className='fr-form-label text-start'>End Date</Form.Label>
                                                        <Form.Control {...register("end_business")} type="date"/>
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
                                                <Form.Control {...register("departure_date")} type="date"/>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label className='fr-form-label text-start'>Time</Form.Label>
                                                <Form.Control {...register("departure_time")} type="time"/>
                                            </Col>
                                            <Col md>
                                                <Form.Label className='fr-form-label text-start'>Destination City/Airport</Form.Label>
                                                <Form.Control {...register("departure_city")} type="text" placeholder="Destination City/Airport"/>
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
                                                <Form.Control {...register("return_date")} type="date"/>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label className='fr-form-label text-start'>Time</Form.Label>
                                                <Form.Control {...register("return_time")} type="time"/>
                                            </Col>
                                            <Col md>
                                                <Form.Label className='fr-form-label text-start'>Destination City/Airport</Form.Label>
                                                <Form.Control {...register("return_city")} type="text" placeholder="Destination City/Airport"/>
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
                                            <Form.Control {...register("extra_baggage")} type="text" placeholder="N/A"/>
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
                                                <Form.Check {...register("approved_by")}
                                                    inline
                                                    label="ARC"
                                                    type="radio"
                                                    id={`inline-radio-1`}
                                                />
                                                <Form.Check {...register("approved_by")}
                                                    inline
                                                    label="JDLC"
                                                    type="radio"
                                                    id={`inline-radio-2`}
                                                />
                                                <Form.Check {...register("approved_by")}
                                                    inline
                                                    label="ATP"
                                                    type="radio"
                                                    id={`inline-radio-3`}
                                                />
                                                <Form.Check {...register("approved_by")}
                                                    inline
                                                    label="DFS"
                                                    type="radio"
                                                    id={`inline-radio-3`}
                                                />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>

                            {/* Error box */}
                            <div className="form-box form-box-error mb-3 w-100 d-flex align-items-center py-2 px-4 gap-4">
                                <i className="bi bi-exclamation-triangle-fill fs-1"/>
                                {/* <p className='text-start m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p> */}
                                <p className='text-start m-0'>Error message here.</p>
                            </div>

                            {/* Buttons */}
                            <div>
                                <button className='button-draft w-100 mb-3' type='submit'>Save As Draft</button>
                                <button className='button-affirm w-100 mb-5' type='submit'>Submit</button>
                            </div>

                            {/* Save Submit */}
                        </Form>

                    </div>
                    
                </Col>

                {/*Right Content Additional Form Content Goes Here*/}
                <Col>
                </Col>
            </Row>
        </MainContainer>
    )
}