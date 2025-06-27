import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";

export default function DashboardFilter({view, setFilterView}) {

    // State variables for the filter form
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");

    const clearForm = () => {
        setDepartment("");
        setRole("");
    };

    return ( 

        <Modal show={view} size="lg">

            <Modal.Body>
                <div>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Requestor Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name of Requestor"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Requested For</Form.Label>
                                    <Form.Control type="text" placeholder="Name of Flier"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Select>
                                        <option>Select Department</option>
                                        <option value='1'>2tech</option>
                                        <option value='2'>Accounting</option>
                                        <option value='3'>Customer Service</option>
                                        <option value='4'>ETS</option>
                                        <option value='5'>Finance</option>
                                        <option value='6'>HR/Admin</option>
                                        <option value='7'>Marketing</option>
                                        <option value='8'>Production, Logistics, Purchasing</option>
                                        <option value='9'>R&D</option>
                                        <option value='10'>Sales</option>
                                        <option value='11'>SHS</option>
                                        <option value='12'>TFI Academy</option>
                                        <option value='13'>Product Training & Support</option>
                                        <option value='14'>CoreDev</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Form Type</Form.Label>
                                    <Form.Select>
                                        <option>Select Answer</option>
                                        <option value="1">Equipment Request</option>
                                        <option value="2">Flight Request</option>
                                        <option value="3">Leave Request</option>
                                        <option value="4">Grievance Form</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select>
                                        <option>Select Answer</option>
                                        <option value="1">Approved</option>
                                        <option value="2">Pending</option>
                                        <option value="3">Declined</option>
                                        <option value="4">For Review</option>
                                        <option value="5">In Progress</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label>Purpose of Travel</Form.Label>
                                    <Form.Select>
                                        <option>Select Answer</option>
                                        <option value="1">Reason 1</option>
                                        <option value="2">Reason 2</option>
                                        <option value="3">Reason 3</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>date Submitted</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control type="date" placeholder="Start Range"/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="date" placeholder="End Range"/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <button type='button' onClick={clearForm}>Clear</button>
                <button type='button' onClick={()=>setFilterView(false)}>Apply</button>
            </Modal.Footer>

        </Modal>

    );
}