import { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function RegisterForm({view, setFormView}) {

    const [formValues, setFormValues] = useState();

    const { register, handleSubmit, reset, formState: { errors, isValid, isSubmitted, isSubmitSuccessful } } = useForm({
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
        setFormView(false);
        reset();
    }

    const handleCancel = () => {
        setFormView(false);
        reset();
    }

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful])

    return ( 

        <Modal show={view} size="lg" className="form-modal">
            {/* <Modal.Header>
                <div className="tf-form-title">
                    <h1 className="tf-header text-black">Register User</h1>
                </div>
            </Modal.Header> */}

            <Modal.Body className="my-4">
                <div className="tf-form-title mt-2 mb-4">
                    <h1 className="tf-header text-black">Register User</h1>
                </div>
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
                                    <Form.Control {...register("firstName", {required : true})} 
                                        className={`${errors.firstName ? "input-invalid" : ""}`} type="text" placeholder="First Name"/>
                                    {errors.firstName && errors.firstName.type === "required" && <span className="error-msg">This field is required.</span>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-optional'>Middle Name</Form.Label>
                                    <Form.Control {...register("middleName", {required: false})} type="text" placeholder="Middle Name"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Last Name</Form.Label>
                                    <Form.Control {...register("lastName", {required : true})} 
                                        className={`${errors.lastName ? "input-invalid" : ""}`} type="text" placeholder="Last Name"/>
                                    {errors.lastName && errors.lastName.type === "required" && <span className="error-msg">This field is required.</span>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            {/* Email */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fr-form-label input-required'>Email address</Form.Label>
                                    <Form.Control {...register("email", {required : true})} 
                                        className={`${errors.email ? "input-invalid" : ""}`} type="text" placeholder="Enter email" />
                                    {errors.email && errors.email.type === "required" && <span className="error-msg">This field is required.</span>}
                                </Form.Group>
                            </Col>
                            {/* Phone Number */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Phone Number</Form.Label>
                                    <Form.Control {...register("phone", {required : true})} 
                                        className={`${errors.phone ? "input-invalid" : ""}`} type="tel" placeholder="+63"/>
                                    {errors.phone && errors.phone.type === "required" && <span className="error-msg">This field is required.</span>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            {/* Department */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Department</Form.Label>
                                    <Form.Select {...register("department", {required : true})}
                                        className={`${errors.department ? "input-invalid" : ""}`} >
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
                                    {errors.department && errors.department.type === "required" && <span className="error-msg">This field is required.</span>}
                                </Form.Group>
                            </Col>

                            {/* Role */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Role</Form.Label>
                                    <Form.Select {...register("role", {required : true})}
                                        className={`${errors.role ? "input-invalid" : ""}`} >
                                        <option>Select Role</option>
                                        <option value="1">HR</option>
                                        <option value="2">Employee</option>
                                    </Form.Select>
                                    {errors.role && errors.role.type === "required" && <span className="error-msg">This field is required.</span>}
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
                                    <Form.Control {...register("username", {required : true})} 
                                        className={`${errors.username ? "input-invalid" : ""}`} type="text" placeholder="Enter username"/>
                                    {errors.username && errors.username.type === "required" && <span className="error-msg">This field is required.</span>}
                                </Form.Group>
                            </Col>

                            {/* Password */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fr-form-label input-required'>Password</Form.Label>
                                    <Form.Control {...register("password", {required : true})} 
                                        className={`${errors.password ? "input-invalid" : ""}`} type="password" placeholder="Password" />
                                    {errors.password && errors.password.type === "required" && <span className="error-msg">This field is required.</span>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex flex-column">
                            { (!isValid && isSubmitted) && <div className="form-box form-box-error mb-3 w-100 d-flex align-items-center px-4 gap-4">
                                <i className="bi bi-exclamation-triangle-fill fs-1"/>
                                <p className='text-start m-0'>Please check if all required fields are filled and if all inputs are valid.</p>
                            </div> }
                            <div className="d-flex justify-content-between w-100">
                                <button type="button" className="button-neg" onClick={handleCancel}>Cancel</button>
                                <button type="submit" className='button-affirm'>Submit</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>

    );
}