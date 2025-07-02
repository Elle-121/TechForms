import { Modal, Form, Row, Col } from "react-bootstrap";

export default function RegisterForm({view, setFormView}) {

    return ( 

        <Modal show={view} size="lg" className="form-modal">
            <Modal.Header>
                <div className="tf-form-title">
                    <h1 className="tf-header text-black">Register User</h1>
                </div>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <Form>
                        <div className="tf-form-section">
                            <h2>User</h2>
                            <p>User Information</p>
                        </div>

                        {/* Name */}
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label'>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label'>Middle Name</Form.Label>
                                    <Form.Control type="text" placeholder="Middle Name"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label'>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            {/* Department */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label'>Department</Form.Label>
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

                            {/* Role */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label'>Role</Form.Label>
                                    <Form.Select>
                                        <option>Select Role</option>
                                        <option value="1">HR</option>
                                        <option value="2">Employee</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            {/* Email */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fr-form-label'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            {/* Phone Number */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label'>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="+63"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="tf-form-section">
                            <h2>Account Credentials</h2>
                            <p>Username and Password</p>
                        </div>
                        
                        <Row>
                            {/* Username */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label'>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username"/>
                                </Form.Group>
                            </Col>

                            {/* Password */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fr-form-label'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer className="d-flex flex-column">
                {/* Error box */}
                <div className="form-box form-box-error mb-3 w-100 d-flex align-items-center py-3 px-4 gap-4">
                    <i className="bi bi-exclamation-triangle-fill fs-1"/>
                    {/* <p className='text-start m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p> */}
                    <p className='text-start m-0'>Error message here.</p>
                </div>

                <div className="d-flex justify-content-between w-100">
                    <button className="button-neg" onClick={()=>setFormView(false)}>Cancel</button>
                    <button className='button-affirm' onClick={()=>setFormView(false)}>Submit</button>
                </div>
            </Modal.Footer>

        </Modal>

    );
}