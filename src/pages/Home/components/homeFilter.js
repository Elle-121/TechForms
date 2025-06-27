import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { departments, formTypes, status, reasons } from "./filterData";
import "../../../App.scss";

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
                                        {
                                            departments.map(item => 
                                                <option value={item.name}>{item.name}</option>        
                                            )
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Form Type</Form.Label>
                                    <Form.Select>
                                        <option>Select Answer</option>
                                        {
                                            formTypes.map(item => 
                                                <option value={item.name}>{item.name}</option>        
                                            )
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select>
                                        <option>Select Answer</option>
                                        {
                                            status.map(item => 
                                                <option value={item.name}>{item.name}</option>        
                                            )
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Purpose of Travel</Form.Label>
                                    <Form.Select>
                                        <option>Select Answer</option>
                                        {
                                            reasons.map(item => 
                                                <option value={item.name}>{item.name}</option>        
                                            )
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label>Date Submitted</Form.Label>
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

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Departure</Form.Label>
                                        <Form.Control type="text" placeholder="Enter City"/>
                                        <Form.Control type="date" placeholder="Start Range"/>
                                        <Form.Control type="date" placeholder="End Range"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Return</Form.Label>
                                        <Form.Control type="text" placeholder="Enter City"/>
                                        <Form.Control type="date" placeholder="Start Range"/>
                                        <Form.Control type="date" placeholder="End Range"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label>Start Date of Business</Form.Label>
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

                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label>End Date of Business</Form.Label>
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
                <button class="button-62">Apply</button>
            </Modal.Footer>

        </Modal>

    );
}