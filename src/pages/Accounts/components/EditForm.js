import { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { departments } from "../../Home/components/filterData";

export default function EditForm({view, setEditView, data}) {

    const [formValues, setFormValues] = useState();

    const id = data.id;
    delete data.id;

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

    useEffect(() => {
        reset(data); // Prefill form with productData
    }, [data, reset]);

    const displayValues = (values) => {
        console.log(values);
        setFormValues(values);
        setEditView(false);
        reset();
    }

    const handleCancel = () => {
        setEditView(false);
        reset();
    }

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful])

    return ( 

        <Modal show={view} size="lg" className="form-modal">
            <Modal.Body className="my-4">
                <div className="tf-form-title mt-2 mb-4">
                    <h1 className="tf-header text-black">Edit User Details</h1>
                </div>
                <div>
                    <Form onSubmit={handleSubmit(displayValues)}>
                        <div className="tf-form-section">
                            <h2>User</h2>
                            <p>User Information</p>
                        </div>

                        <Row>
                            {/*First Name */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>First Name</Form.Label>
                                    <Form.Control className={`${errors.firstName ? "input-invalid" : ""}`} type="text" placeholder="First Name" 
                                        {...register("firstName", {
                                            required : "This field is required.",
                                            maxLength: {
                                                value: 50,
                                                message: "Max characters reached."
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z\s\-']+$/,
                                                message: "Only letters, space, and hyphen characters are allowed."
                                            }
                                    })}/>
                                    
                                    {errors.firstName && 
                                        <span className="error-msg">{errors.firstName.message}</span>
                                    }
                                </Form.Group>
                            </Col>
                            
                            {/* Middle Name */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-optional'>Middle Name</Form.Label>
                                    <Form.Control className={`${errors.middleName ? "input-invalid" : ""}`} type="text" placeholder="Middle Name" 
                                        {...register("middleName", {
                                            maxLength: {
                                                value: 50,
                                                message: "Max characters reached."
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z\s\-']+$/,
                                                message: "Only letters, space, and hyphen characters are allowed."
                                            }
                                    })}/>
                                    
                                    {errors.middleName && 
                                        <span className="error-msg">{errors.middleName.message}</span>
                                    }
                                </Form.Group>                            
                            </Col>
                            
                            {/* Last Name */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Last Name</Form.Label>
                                    <Form.Control className={`${errors.lastName ? "input-invalid" : ""}`} type="text" placeholder="Last Name" 
                                        {...register("lastName", {
                                            required : "This field is required.",
                                            maxLength: {
                                                value: 50,
                                                message: "Max characters reached."
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z\s\-']+$/,
                                                message: "Only letters, space, and hyphen characters are allowed."
                                            }
                                    })}/>
                                    
                                    {errors.lastName && 
                                        <span className="error-msg">{errors.lastName.message}</span>
                                    }
                                </Form.Group>                            
                            </Col>
                        </Row>

                        <Row>
                            {/* Email */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fr-form-label input-required'>Email address</Form.Label>
                                    <Form.Control className={`${errors.email ? "input-invalid" : ""}`} type="text" placeholder="name@email.com" 
                                        {...register("email", {
                                            required : "This field is required.",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "PLease enter a valid email."
                                            }
                                    })}/>
                                    
                                    {errors.email && 
                                        <span className="error-msg">{errors.email.message}</span>
                                    }
                                </Form.Group>
                            </Col>

                            {/* Phone Number */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Phone Number</Form.Label>
                                    <Form.Control className={`${errors.phone ? "input-invalid" : ""}`} type="text" placeholder="09XXXXXXXX"                                     
                                        {...register("phone", {
                                            required : "This field is required.",
                                            pattern: {
                                                value: /^09\d{9}$/,
                                                message: "PLease enter a valid phone number."
                                            }
                                    })}/>
                                    
                                    {errors.phone && 
                                        <span className="error-msg">{errors.phone.message}</span>
                                    }
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            {/* Department */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Department</Form.Label>
                                    <Form.Select {...register("department", {required : "This field is required."})}
                                        className={`${errors.department ? "input-invalid" : ""}`}>
                                        <option disabled value=''>Select Department</option>
                                        {
                                            departments.map(item => 
                                                <option value={item.name}>{item.name}</option>)
                                        }
                                    </Form.Select>
                                    
                                    {errors.department && 
                                        <span className="error-msg">{errors.department.message}</span>
                                    }
                                </Form.Group>
                            </Col>

                            {/* Role */}
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fr-form-label input-required'>Role</Form.Label>
                                    <Form.Select {...register("role", {required : "This field is required."})}
                                        className={`${errors.role ? "input-invalid" : ""}`} >
                                        <option disabled value="">Select Role</option>
                                        <option value="HR">HR</option>
                                        <option value="Employee">Employee</option>
                                    </Form.Select>

                                    {errors.role && 
                                        <span className="error-msg">{errors.role.message}</span>
                                    }
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
                                    <Form.Control className={`${errors.username ? "input-invalid" : ""}`} type="text" placeholder="Enter username" 
                                        {...register("username", {
                                            required : "This field is required.",
                                            maxLength: {
                                                value: 20,
                                                message: "Max characters reached."
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9_.]+$/,
                                                message: "Only letters, numbers, periods, and underscores are allowed."
                                            }
                                    })}/>
                                    
                                    {errors.username && 
                                        <span className="error-msg">{errors.username.message}</span>
                                    }
                                </Form.Group>
                            </Col>

                            {/* Password */}
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fr-form-label input-required'>Password</Form.Label>
                                    <Form.Control className={`${errors.password ? "input-invalid" : ""}`} type="password" placeholder="Enter password" 
                                        {...register("password", {
                                            required : "This field is required.",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters long."
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9_\-]+$/,
                                                message: "Only letters, numbers, underscores, and hyphens are allowed."
                                            }
                                    })}/>
                                    
                                    {errors.password && 
                                        <span className="error-msg">{errors.password.message}</span>
                                    }
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