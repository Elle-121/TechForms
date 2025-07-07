import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, FormGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

//components
import MainContainer from '../../components/MainContainer';
import ProgressLadder from './components/ProgressLadder';

//data
import { departments, reasons } from "../Home/components/filterData";

export default function FlightRequestForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
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

    const [othersChecked, setOthersChecked] = useState(false);
    const [othersValue, setOthersValue] = useState("");
    const [remarksView, setRemarksView] = useState(true);
    const hasErrors = Object.keys(errors).length > 0;
    
    const validatePurpose = (value, formValues) => {
        const purposes = formValues.purpose
        const othersValid = othersChecked && othersValue.trim() !== "";
        return (purposes.length > 0 || othersValid) || "Please select at least one purpose of travel or specify 'Others'.";
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
                    {remarksView && (
                    <div className="form-box form-box-remarks mb-3 w-100 d-flex align-items-center py-3 px-4 gap-4">
                        <i className="bi bi-exclamation-triangle-fill fs-1"/>
                        <p className='text-start m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p>
                        {/* <p className='text-start m-0'>Remarks here.</p> */}
                    </div>
                    )}

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
                                            <Form.Control className={`${errors.requestor ? "input-invalid" : ""}`} {...register("requestor", {required: 'Requestor name is required'})} type="text" placeholder="Name of Requestor" />
                                            {errors.requestor && (
                                                <div className="error-msg">
                                                    {errors.requestor.message}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className='fr-form-label'>Company Email</Form.Label>
                                            <Form.Control className={`${errors.email ? "input-invalid" : ""}`} {...register("email", {required: 'Email is required'})} type="email" placeholder="email@techfactors.com" />
                                            {errors.email && (
                                                <div className="error-msg">
                                                    {errors.email.message}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mb-2'>
                                    <Form.Group>
                                        <Form.Label className='fr-form-label'>Department</Form.Label>
                                        <Form.Select className={`${errors.department ? "input-invalid" : ""}`} {...register("department", {required: 'Department is required'})}>
                                            {
                                                departments.map(item => 
                                                    <option value={item.name}>{item.name}</option>        
                                                )
                                            }
                                        </Form.Select>
                                        {errors.department && (
                                                <div className="error-msg">
                                                    {errors.department.message}
                                                </div>
                                        )}
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
                                            <Form.Control className={`${errors.first_name1 ? "input-invalid" : ""}`} {...register("first_name1", {required: 'First name is required'})} type="text" placeholder="First Name" />
                                            {errors.first_name1 && (
                                                <div className="error-msg">
                                                    {errors.first_name1.message}
                                                </div>
                                            )}
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
                                            <Form.Control className={`${errors.last_name1 ? "input-invalid" : ""}`} {...register("last_name1", {required: 'Last name is required'})} type="text" placeholder="Last Name" />
                                            {errors.last_name1 && (
                                                <div className="error-msg">
                                                    {errors.last_name1.message}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mb-4'>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className='fr-form-label'>Birthday</Form.Label>
                                            <Form.Control className={`${errors.birthday1 ? "input-invalid" : ""}`} {...register("birthday1", {required: 'Birthday is required'})} type="date"/>
                                            {errors.birthday1 && (
                                                <div className="error-msg">
                                                    {errors.birthday1.message}
                                                </div>
                                            )}
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
                                            {/* <Form.Control {...register("title1")} type="text" placeholder="Mr./Ms." /> */}
                                            <Form.Select className={`${errors.title1 ? "input-invalid" : ""}`} {...register("title1", {required: 'Title is required'})}>
                                                <option value="Mr.">Mr.</option>
                                                <option value="Ms.">Ms.</option>
                                            </Form.Select>
                                            {errors.title1 && (
                                                <div className="error-msg">
                                                    {errors.title1.message}
                                                </div>
                                            )}
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
                                    <Form.Group className="mb-3 text-start fr-form-label">
                                        <Row>
                                        <Col>
                                            <div key={`default-checkbox`} className="mb-3">
                                                {
                                                    reasons.slice(0, 6).map(item => 
                                                        <Form.Check {...register("purpose", {validate: validatePurpose})}
                                                            label={item.name}
                                                            value={item.name}
                                                            type="checkbox"
                                                        />        
                                                    )
                                                }
                                            </div>
                                        </Col>
                                        
                                        <Col>                                        
                                            <div key={`default-checkbox`} className="mb-3">
                                                {
                                                    reasons.slice(6, 12).map(item => 
                                                        <Form.Check {...register("purpose", {validate: validatePurpose})}
                                                            label={item.name}
                                                            value={item.name}
                                                            type="checkbox"
                                                        />        
                                                    )
                                                }
                                            </div>
                                        </Col>
                                        </Row>

                                        {/* Others Checkbox and Input */}
                                        <Row>
                                            <Col>
                                                <div className="d-flex align-items-center">
                                                    <Form.Check
                                                        inline
                                                        type="checkbox"
                                                        checked={othersChecked}
                                                        onChange={e => setOthersChecked(e.target.checked)}
                                                        className="me-2"
                                                    />
                                                    <Form.Control {...register("purpose_others", {validate: validatePurpose})}
                                                        type="text"
                                                        placeholder="Others (Please Specify)"
                                                        disabled={!othersChecked}
                                                        value={othersChecked? othersValue : ''}
                                                        onChange={e => setOthersValue(e.target.value)}
                                                        style={{ maxWidth: 300 }}
                                                    />
                                                </div>                                                
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                        {errors.purpose && (
                                                <div className="error-msg">
                                                    {errors.purpose.message}
                                                </div>
                                        )}
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
                                                        <Form.Control className={`${errors.start_business ? "input-invalid" : ""}`} {...register("start_business", {required: "Start date of business is required"})} type="date"/>
                                                        {errors.start_business && (
                                                            <div className="error-msg">
                                                                {errors.start_business.message}
                                                            </div>
                                                        )}
                                                    </Col>
                                                    <Col xs='auto' className='d-flex align-items-center' >
                                                        To
                                                    </Col>
                                                    <Col>
                                                        <Form.Label className='fr-form-label text-start'>End Date</Form.Label>
                                                        <Form.Control className={`${errors.end_business ? "input-invalid" : ""}`} {...register("end_business", {required: "End date of business is required"})} type="date"/>
                                                        {errors.end_business && (
                                                            <div className="error-msg">
                                                                {errors.end_business.message}
                                                            </div>
                                                        )}
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
                                                <Form.Control className={`${errors.departure_date ? "input-invalid" : ""}`} {...register("departure_date", {required: "Departure date is required"})} type="date"/>
                                                {errors.departure_date && (
                                                    <div className="error-msg">
                                                        {errors.departure_date.message}
                                                    </div>
                                                )}
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label className='fr-form-label text-start'>Time</Form.Label>
                                                <Form.Control className={`${errors.departure_time ? "input-invalid" : ""}`} {...register("departure_time", {required: "Departure time is required"})} type="time"/>
                                                {errors.departure_time && (
                                                    <div className="error-msg">
                                                        {errors.departure_time.message}
                                                    </div>
                                                )}
                                            </Col>
                                            <Col md>
                                                <Form.Label className='fr-form-label text-start'>Destination City/Airport</Form.Label>
                                                <Form.Control className={`${errors.departure_city ? "input-invalid" : ""}`} {...register("departure_city", {required: "Destination City/Airport is required"})} type="text" placeholder="Destination City/Airport"/>
                                                {errors.departure_city && (
                                                    <div className="error-msg">
                                                        {errors.departure_city.message}
                                                    </div>
                                                )}
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
                                                <Form.Control className={`${errors.return_date ? "input-invalid" : ""}`} {...register("return_date", {required: "Return date is required"})} type="date"/>
                                                {errors.return_date && (
                                                    <div className="error-msg">
                                                        {errors.return_date.message}
                                                    </div>
                                                )}
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label className='fr-form-label text-start'>Time</Form.Label>
                                                <Form.Control className={`${errors.return_time ? "input-invalid" : ""}`} {...register("return_time", {required: "Return time is required"})} type="time"/>
                                                {errors.return_time && (
                                                    <div className="error-msg">
                                                        {errors.return_time.message}
                                                    </div>
                                                )}
                                            </Col>
                                            <Col md>
                                                <Form.Label className='fr-form-label text-start'>Destination City/Airport</Form.Label>
                                                <Form.Control className={`${errors.return_city ? "input-invalid" : ""}`} {...register("return_city", {required: "Destination City/Airport is required"})} type="text" placeholder="Destination City/Airport"/>
                                                {errors.return_city && (
                                                    <div className="error-msg">
                                                        {errors.return_city.message}
                                                    </div>
                                                )}
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
                                                <Form.Check {...register("approved_by", {required: "Approver is required"})}
                                                    inline
                                                    label="ARC"
                                                    value="ARC"
                                                    type="radio"
                                                    id={`inline-radio-1`}
                                                />
                                                <Form.Check {...register("approved_by")}
                                                    inline
                                                    label="JDLC"
                                                    value="JDLC"
                                                    type="radio"
                                                    id={`inline-radio-2`}
                                                />
                                                <Form.Check {...register("approved_by")}
                                                    inline
                                                    label="ATP"
                                                    value="ATP"
                                                    type="radio"
                                                    id={`inline-radio-3`}
                                                />
                                                <Form.Check {...register("approved_by")}
                                                    inline
                                                    label="DFS"
                                                    value="DFS"
                                                    type="radio"
                                                    id={`inline-radio-3`}
                                                />
                                                
                                                {errors.approved_by && (
                                                    <div className="error-msg">
                                                        {errors.approved_by.message}
                                                    </div>
                                                )}
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>

                            {/* Error box */}
                            
                            {hasErrors && (<div className="form-box form-box-error mb-3 w-100 d-flex align-items-center py-2 px-4 gap-4">
                                <i className="bi bi-exclamation-triangle-fill fs-1"/>        
                                <p className='text-start m-0'>Some required fields are missing. Please review and complete them to proceed.</p>
                            </div>)}

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