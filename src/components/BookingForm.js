import { Modal, Form, Row, Col } from "react-bootstrap";

export default function BookingForm({view, setFormView}) {

    return ( 
        <Modal show={view} size="lg" className="form-modal">
            <Modal.Header>
                <div className="tf-form-title">
                    <h1 className="tf-header text-black">Booking Details</h1>
                </div>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <Form>

                        {/* Request Details */}
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Employee Name</Form.Label>
                                    <Form.Control type="text" placeholder="Full Name"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Request ID</Form.Label>
                                    <Form.Control type="text" placeholder="TFI250630"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="tf-form-section">
                            <h2>Departure</h2>
                            <p>Departure Booking Details</p>
                        </div>

                                                <Row>
                            {/* Booking Reference No. */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Booking Reference No.</Form.Label>
                                    <Form.Control type="text" placeholder="Reference No." />
                                </Form.Group>
                            </Col>
                            {/* Cost */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cost</Form.Label>
                                    <Form.Control type="number" placeholder="Php"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Ticket</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Row>

                        <div className="tf-form-section">
                            <h2>Return</h2>
                            <p>Return Booking Details</p>
                        </div>
                        
                        <Row>
                            {/* Booking Reference No. */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Booking Reference No.</Form.Label>
                                    <Form.Control type="text" placeholder="Reference No." />
                                </Form.Group>
                            </Col>
                            {/* Cost */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cost</Form.Label>
                                    <Form.Control type="number" placeholder="Php"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Ticket</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <button className="button-neg ms-2" onClick={()=>setFormView(false)}>Cancel</button>
                <button className='button-affirm ms-2' onClick={()=>setFormView(false)}>Submit</button>
            </Modal.Footer>

        </Modal>

    );
}