import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
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
                                    <Form.Label className='filter-form-label'>Requestor Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name of Requestor"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Requested For</Form.Label>
                                    <Form.Control type="text" placeholder="Name of Flier"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Department</Form.Label>
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
                                    <Form.Label className='filter-form-label'>Form Type</Form.Label>
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
                                    <Form.Label className='filter-form-label'>Status</Form.Label>
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
                                    <Form.Label className='filter-form-label'>Purpose of Travel</Form.Label>
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
                                    <Form.Label className='filter-form-label'>Date Submitted</Form.Label>
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
                                    <Form.Label className='filter-form-label'>Departure</Form.Label>
                                        <Form.Control className="mb-1" type="text" placeholder="Enter City"/>
                                        <Form.Control className="mb-1" type="date" placeholder="Start Range"/>
                                        <Form.Control className="mb-1" type="date" placeholder="End Range"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='filter-form-label'>Return</Form.Label>
                                        <Form.Control className="mb-1" type="text" placeholder="Enter City"/>
                                        <Form.Control className="mb-1" type="date" placeholder="Start Range"/>
                                        <Form.Control className="mb-1" type="date" placeholder="End Range"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center">
                                    <Form.Label className='filter-form-label'>Start Date of Business</Form.Label>
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
                                    <Form.Label className='filter-form-label'>End Date of Business</Form.Label>
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
                                    <Form.Label className='filter-form-label'>To be approved by</Form.Label>
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