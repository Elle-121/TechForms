import { Modal, Form, Row, Col, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { departments, formTypes, status, reasons } from "./filterData";
import "../../../App.scss";

export default function FormsModal({view, setFormsView}) {
    
    const home = async () => {
        window.location.href = "/";
    }

    return ( 
        <Modal show={view} size='sm'>
            <Modal.Header className="modal-header">
                <div className="d-flex justify-content-between align-items-center">
                        <button type='button' className="hover-underline d-flex align-items-center" onClick={home}>
                            <i className="bi bi-chevron-left" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                            <span style={{ color: '#EE9337', fontSize: '14px' }}>Back</span>
                        </button>
                        <h1 className="tf-header">Select a Form</h1>
                </div>
            </Modal.Header>
            <Modal.Body className="modal-body">
                Body
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                <div>
                    <button type='button' className="hover-underline d-flex align-items-center" onClick={setFormsView(false)}>
                        <span style={{ color: '#EE9337', fontSize: '14px' }}>Booking Details</span>
                        <i className="bi bi-chevron-right" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}