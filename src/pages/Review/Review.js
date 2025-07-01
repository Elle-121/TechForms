// export default Home;
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

// components
import MainContainer from '../../components/MainContainer';
import BookingForm from '../../components/BookingForm';

export default function Review() {

    // Function to open the booking form
    const [formView, setFormView] = useState(false)
    
    const openFormView = () => {
        setFormView(true);
    }

    const home = async () => {
        window.location.href = "/";
    }

    return (
        <MainContainer>
        <div className="row h-100 m-0">
            {/* Left Side */}
            <div className="col-md-3 col-lg-2 h-100 overflow-auto"  style={{ width: '30%', borderRight: '5px solid var(--tforange-color)' }}>

                {/* Header - Requests + Searchbar + Filter */}
                <div className="d-flex justify-content-between align-items-center pb-2">
                    <button type='button' className="hover-underline d-flex align-items-center" onClick={home}>
                        <i className="bi bi-chevron-left" style={{ fontSize: '18px', color: '#EE9337' }}></i>
                        <span style={{ color: '#EE9337', fontSize: '14px' }}>Back</span>
                    </button>
                </div>

                <Form>
                    <Form.Group className="mt-2 mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='review-notes'>Notes:</Form.Label>
                        <Form.Control as="textarea" placeholder='Enter notes.' rows={3} style={{height: '60vh'}}/>
                    </Form.Group>
                </Form>
                
                <div className='d-flex justify-content-center gap-2 btn-group-review'>
                    <button className='btn-reject py-1'>Reject</button>
                    <button onClick={openFormView} className='btn-add py-1'>Add Booking Details</button>
                    <BookingForm view={formView} setFormView={setFormView} />
                </div>
            </div>

            {/* Right Content */}
            <div className="p-4 h-100 overflow-auto border" style={{width: '70%',display: 'flex',flexDirection: 'column',}}>
                <h1>Preview of Flight Request Form</h1>
                
            </div>

        </div>
        </MainContainer>
    );
};