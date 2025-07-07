import { useState } from 'react';
import { Modal } from "react-bootstrap";
import { forms } from "./filterData";
import "../../../App.scss";

//component
import SearchBar from '../../../components/SearchBar';

export default function FormsModal({view, setFormsView}) {

    const closeFormsView = () => {
        setFormsView(false);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    // Filter the forms based on searchValue
    const filteredForms = forms.filter(item => 
        !searchValue || item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return ( 
        <Modal show={view} size='lg'>
            <Modal.Header style={{borderBottom:'none'}}>
                {/* Back Button */}
                <div className="position-relative w-100">
                    <button className="hover-underline d-flex align-items-center position-absolute start-0" onClick={closeFormsView}>
                        <i className="bi bi-chevron-left" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                        <span style={{ color: '#EE9337', fontSize: '14px' }}>Back</span>
                    </button>
                    <h2 className="forms-modal-title text-center">Select a Form</h2>
                </div>
            </Modal.Header>

            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <SearchBar setSearchValue={setSearchValue} setCurrentPage={setCurrentPage}/>
                </div>
                    {
                        filteredForms.map(item => 
                            <div className="d-flex justify-content-center">
                                <button className="forms-modal-option w-50 mt-2 mb-2" onClick={async () => {window.location.href = item.route}}>{item.name}</button>
                            </div>
                        )
                    }
            </Modal.Body>

            <Modal.Footer style={{borderTop:'none'}}>
            </Modal.Footer>
        </Modal>
    );
}