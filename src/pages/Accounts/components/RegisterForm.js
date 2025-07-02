import { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function RegisterForm({view, setFormView}) {

    const [formValues, setFormValues] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            department: "",
            role: "",
            email: "",
            phone: "",
            username: "",
            password: "",
        }
    })

    const displayValues = (values) => {
        console.log(values);
        setFormValues(values);
    }

    return ( 

        <Modal show={view} size="lg" className="form-modal">
            <Modal.Header>
                <div className="tf-form-title">
                    <h1 className="tf-header text-black">Register User</h1>
                </div>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <Form onSubmit={handleSubmit(displayValues)}>
                        <div className="tf-form-section">
                            <h2>User</h2>
                            <p>User Information</p>
                        </div>

                        {/* Name */}
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>First Name</Form.Label>
                                    <Form.Control {...register("firstName", {required : true})} type="text" placeholder="First Name"/>
                                    {console.log(errors)}
                                    {errors.firstName && <span className="error">{errors.firstName.message}</span>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Middle Name</Form.Label>
                                    <Form.Control {...register("middleName")} type="text" placeholder="Middle Name"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Last Name</Form.Label>
                                    <Form.Control {...register("lastName")} type="text" placeholder="Last Name"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            {/* Department */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Department</Form.Label>
                                    <Form.Select {...register("department")}>
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
                                    <Form.Label className='fr-form-label input-required'>Role</Form.Label>
                                    <Form.Select {...register("role")}>
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
                                    <Form.Label className='fr-form-label input-required'>Email address</Form.Label>
                                    <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </Form.Group>
                            </Col>
                            {/* Phone Number */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Phone Number</Form.Label>
                                    <Form.Control {...register("phone")} type="number" placeholder="+63"/>
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
                                    <Form.Label className='fr-form-label input-required'>Username</Form.Label>
                                    <Form.Control {...register("username")} type="text" placeholder="Enter username"/>
                                </Form.Group>
                            </Col>

                            {/* Password */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fr-form-label input-required'>Password</Form.Label>
                                    <Form.Control {...register("password")} type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex flex-column">
                            <div className="form-box form-box-error mb-3 w-100 d-flex align-items-center py-3 px-4 gap-4">
                                <i className="bi bi-exclamation-triangle-fill fs-1"/>
                                {/* <p className='text-start m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p> */}
                                <p className='text-start m-0'>Error message here.</p>
                            </div>
                            <div className="d-flex justify-content-between w-100">
                                <button type="button" className="button-neg" onClick={()=>setFormView(false)}>Cancel</button>
                                <button type="submit" className='button-affirm'>Submit</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal.Body>

            <Modal.Footer className="d-flex flex-column">
                {/* Error box */}
                {/* <div className="form-box form-box-error mb-3 w-100 d-flex align-items-center py-3 px-4 gap-4">
                    <i className="bi bi-exclamation-triangle-fill fs-1"/>
                    <p className='text-start m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem ultricies tellus maximus, quis mollis mi suscipit. Sed efficitur sapien et sollicitudin volutpat. Maecenas sodales nulla vitae efficitur venenatis. Aliquam erat volutpat. Aenean scelerisque sagittis felis, eget viverra quam pellentesque nec. Aenean ut congue ipsum. </p>
                    <p className='text-start m-0'>Error message here.</p>
                </div> */}

                {/* <div className="d-flex justify-content-between w-100">
                    <button className="button-neg" onClick={()=>setFormView(false)}>Cancel</button>
                    <button className='button-affirm' onClick={()=>setFormView(false)}>Submit</button>
                </div> */}
            </Modal.Footer>

        </Modal>

    );
}