import { Modal, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function BookingForm({view, setFormView}) {

    const [preview, setPreview] = useState(false);

    const exitModal = () => {
        setPreview(false);
        setFormView(false);
    }

    const home = async () => {
        window.location.href = "/";
    }

    return ( 
        <Modal show={view} size="lg" className="form-modal">
            <Modal.Header>
                <div className="tf-form-title">
                    {
                        preview ? 
                            <h1 show={preview} className="tf-header text-black">Preview</h1> :
                            <h1 show={!preview} className="tf-header text-black">Booking Details</h1>
                    }
                </div>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <Form>
                        <fieldset disabled={preview}>
    
                            {/* Request Details */}
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='fr-form-label'>Employee Name</Form.Label>
                                        <Form.Control disabled type="text" placeholder="Full Name"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='fr-form-label'>Request ID</Form.Label>
                                        <Form.Control disabled type="text" placeholder="TFI250630"/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Depature Details */}
                            <div className="tf-form-section">
                                <h2>Departure</h2>
                                <p>Departure Booking Details</p>
                            </div>
    
                                                    <Row>
                                {/* Booking Reference No. */}
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fr-form-label'>Booking Reference No.</Form.Label>
                                        <Form.Control type="text" placeholder="Reference No." />
                                    </Form.Group>
                                </Col>
                                {/* Cost */}
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='fr-form-label'>Cost</Form.Label>
                                        <Form.Control type="number" placeholder="Php"/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Ticket */}
                            <Row>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label className='fr-form-label'>Ticket</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Row>
    
                            {/* Return Details */}
                            <div className="tf-form-section">
                                <h2>Return</h2>
                                <p>Return Booking Details</p>
                            </div>
    
                            <Row>
                                {/* Booking Reference No. */}
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fr-form-label'>Booking Reference No.</Form.Label>
                                        <Form.Control type="text" placeholder="Reference No." />
                                    </Form.Group>
                                </Col>
                                {/* Cost */}
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='fr-form-label'>Cost</Form.Label>
                                        <Form.Control type="number" placeholder="Php"/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Ticket */}
                            <Row>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label className='fr-form-label'>Ticket</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Row>
                        </fieldset>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between">
                {/* Error box */}
                <div className="form-box form-box-error mb-3 w-100 d-flex align-items-center py-3 px-4 gap-4">
                    <i className="bi bi-exclamation-triangle-fill fs-1"/>
                    {/* <p className='text-start m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p> */}
                    <p className='text-start m-0'>Error message here.</p>
                </div>

                {
                    preview ? 
                        <button className="button-neg ms-2" onClick={() => setPreview(false)}>Back</button> :
                        <button className="button-neg ms-2" onClick={() => setFormView(false)}>Cancel</button>
                }
                {
                    preview ? 
                        <button className='btn-approve ms-2' onClick={home}>Submit and Approve</button> :
                        <button className='button-affirm ms-2' onClick={()=>setPreview(true)}>Next</button>
                }
            </Modal.Footer>

        </Modal>

    );
}