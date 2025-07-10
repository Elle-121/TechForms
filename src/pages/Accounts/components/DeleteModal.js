import { Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export default function DeleteModal ({ view, setView, setEditView }) {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, watch } = useForm({
        defaultValues: {
            password: "",
        }
    })
    
    const password = "admin123";
    const displayValues = () => {
        setView(false);
        setEditView(false);
    }
    
    const [showError, setShowError] = useState(false);

    // Show error message after submit button is pressed
    useEffect(() => {
        if (isSubmitting) setShowError(true);
    }, [isSubmitting])

    // Hide error message once user change input after failed submission
    const inputValue = watch("password");
    useEffect(() => {
        setShowError(false);
    }, [inputValue])

    // Reset modal once exited
    useEffect(() => {
        setShowError(false);
        reset();
    }, [view])

    return (
        <div className="modal-second">
            <Modal show={view} size="md" centered>
                <Modal.Body className="mt-2 text-center p-4">
                    <h5 className="fr-form-label mb-3">Delete this user?</h5>
                    <Form onSubmit={handleSubmit(displayValues)}>
                        <Form.Group className={showError ? "": "mb-4"} controlId="formBasicPassword">
                            <Form.Label>Please enter your password to confirm user deletion.</Form.Label>
                            <Form.Control className={`${errors.password ? "input-invalid" : ""}`} type="password" placeholder="Enter password"
                                {...register("password", {
                                    required : "Password cannot be empty.",
                                    validate: value => value === password || "Incorrect password."
                            })}/>

                                { showError &&
                                    <span className="error-msg">
                                        {errors.password && errors.password.message}
                                    </span>
                                }

                        </Form.Group>
                        <div className="d-flex justify-content-between w-100">
                            <button className="button-neg" onClick={() => setView(false)}>Cancel</button>
                            <button type="submit" className='btn-pill btn-pill--red'>Delete</button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}