import { Modal } from "react-bootstrap";

export default function DeleteModal ({ view, setView }) {

    const handleDelete = () => {
        setView(false);
        window.location.href = "/";
    }

    return (
        <div className="modal-second">
            <Modal show={view} size="md" centered>
                <Modal.Body className="mt-2 text-center">
                    <h5>Delete this user?</h5>
                    <p className="m-0">Please enter your password to confirm the user deletion.</p>
                    <div className="d-flex justify-content-between w-100">
                        <button className="button-neg" onClick={() => setView(false)}>Cancel</button>
                        <button className='btn-pill btn-pill--red' onClick={handleDelete}>Delete</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}