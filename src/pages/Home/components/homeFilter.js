import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { departments, formTypes, status, reasons } from "./filterData";
import "../../../App.scss";

export default function DashboardFilter({view, setFilterView}) {

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
                                        <Form.Control className="mb-1" type="text" placeholder="Enter City"/>
                                        <Form.Control className="mb-1" type="date" placeholder="Start Range"/>
                                        <Form.Control className="mb-1" type="date" placeholder="End Range"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Return</Form.Label>
                                        <Form.Control className="mb-1" type="text" placeholder="Enter City"/>
                                        <Form.Control className="mb-1" type="date" placeholder="Start Range"/>
                                        <Form.Control className="mb-1" type="date" placeholder="End Range"/>
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
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label>To be approved by</Form.Label>
                                    <div key={`inline-radio`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="ARC"
                                        value="ARC"
                                        name="group1"
                                        type="radio"
                                    />
                                    <Form.Check
                                        inline
                                        label="JDLC"
                                        value="JDLC"
                                        name="group1"
                                        type="radio"
                                    />
                                    <Form.Check
                                        inline
                                        label="ATP"
                                        value="ATP"
                                        name="group1"
                                        type="radio"
                                    />
                                    <Form.Check
                                        inline
                                        label="DFS"
                                        value="DFS"
                                        name="group1"
                                        type="radio"
                                    />
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div>
                            <Row>
                                <Col className="text-end">
                                    <input class='button-neg ms-2' type='reset' value='Clear'/>                            
                                    <button class='button-affirm ms-2' onClick={()=>setFilterView(false)}>Apply</button>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
            </Modal.Body>

        </Modal>

    );
}