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
                                    <Form.Control {...register("firstName", {required : {value: true, message: "Input required."}})} type="text" placeholder="First Name"/>
                                    {errors?.firstName?.message && <span className="error-msg">{errors.firstName.message}</span>}
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
                                    <Form.Control {...register("lastName", {required : {value: true, message: "Input required."}})} type="text" placeholder="Last Name"/>
                                    {errors?.lastName?.message && <span className="error-msg">{errors.lastName.message}</span>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            {/* Email */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fr-form-label input-required'>Email address</Form.Label>
                                    <Form.Control {...register("email", {required : {value: true, message: "Input required."}})} type="text" placeholder="Enter email" />
                                    {errors?.email?.message && <span className="error-msg">{errors.email.message}</span>}
                                </Form.Group>
                            </Col>
                            {/* Phone Number */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Phone Number</Form.Label>
                                    <Form.Control {...register("phone", {required : {value: true, message: "Input required."}})} type="number" placeholder="+63"/>
                                    {errors?.phone?.message && <span className="error-msg">{errors.phone.message}</span>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            {/* Department */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Department</Form.Label>
                                    <Form.Select {...register("department", {required : {value: true, message: "Input required."}})}>
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
                                    {errors?.department?.message && <span className="error-msg">{errors.department.message}</span>}
                                </Form.Group>
                            </Col>

                            {/* Role */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Role</Form.Label>
                                    <Form.Select {...register("role", {required : {value: true, message: "Input required."}})}>
                                        <option>Select Role</option>
                                        <option value="1">HR</option>
                                        <option value="2">Employee</option>
                                    </Form.Select>
                                    {errors?.role?.message && <span className="error-msg">{errors.role.message}</span>}
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
                                    <Form.Control {...register("username", {required : {value: true, message: "Input required."}})} type="text" placeholder="Enter username"/>
                                    {errors?.username?.message && <span className="error-msg">{errors.username.message}</span>}
                                </Form.Group>
                            </Col>

                            {/* Password */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fr-form-label input-required'>Password</Form.Label>
                                    <Form.Control {...register("password", {required : {value: true, message: "Input required."}})} type="password" placeholder="Password" />
                                    {errors?.password?.message && <span className="error-msg">{errors.password.message}</span>}
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