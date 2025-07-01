import { Modal, Form, Row, Col, } from "react-bootstrap";
import { forms } from "./filterData";
import "../../../App.scss";

//component
import SearchBar from '../../../components/SearchBar';

export default function FormsModal({view, setFormsView}) {

    const closeFormsView = () => {
        setFormsView(false);
    }

    return ( 
        <Modal show={view} size='lg'>
            <Modal.Header>
                {/* Back Button */}
                <div className="position-relative w-100">
                    <button className="hover-underline d-flex align-items-center position-absolute start-0" onClick={closeFormsView}>
                        <i className="bi bi-chevron-left" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                        <span style={{ color: '#EE9337', fontSize: '14px' }}>Back</span>
                    </button>
                    <h2 className="forms-modal-title text-center">Select a Form</h2>
                </div>
            </Modal.Header>

            <Modal.Body className="d-flex justify-content-center">
                <SearchBar/>

            </Modal.Body>

            <Modal.Footer className="modal-footer">
            </Modal.Footer>
        </Modal>
    );
}