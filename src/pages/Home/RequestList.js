import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function BookingList({data}) {
    let navigate = useNavigate();

    const viewBooking = () => {
        navigate("/booking-details")
    }

    // Actions linked to each status as well as their icons and classes
    const statusActions = {
        Draft:  [{ label: 'Edit', icon: 'bi-pencil', className: 'text-tforange', onClick: '' }],
        Pending:[{ label: 'View Details', icon: 'bi-eye', className: 'text-tforange', onClick: '' }],
        Rejected: [{ label: 'Resubmit', icon: 'bi-pencil', className: 'text-tforange', onClick: '' }],
        Approved: [
            { label: 'View Details', icon: 'bi-eye', className: 'text-tforange', onClick: '' },
            { label: 'View Booking', icon: 'bi-journal-bookmark', className: 'text-tfblue', onClick: viewBooking }
        ]
    }


  return (
    <div style={{ overflowY: 'auto' }} className=" border-black">
    {data.map((item) => (
        <div
            key={item.id}
            className="d-flex align-items-center justify-content-between py-3"
            style={{ gap: '16x' , borderBottom: '0px solid var(--tf-gray-1)'}}
        >
            {/* Subject and date */}
            <div style={{ flex: 2, minWidth: '200px', maxWidth: '500px' }} className="">
                <div className="fw-bold" style={{fontSize:'1.25rem'}}>{item.subject}</div> 
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>
                    <span className='' style={{color: 'var(--tf-gray-2)', fontStyle:'italic', fontWeight:500}}>Submitted on: {item.date}</span>
                </div>
            </div>

            {/* Form Type */}
            <div style={{ flex: 2, minWidth: '120px', maxWidth: '200px', textAlign: 'center',whiteSpace: 'normal',wordBreak: 'break-word', display: 'block',}} className="">
                <span className="badge badge-formtype" style={{whiteSpace: 'normal',  wordBreak: 'break-word', display: 'inline-block', }}>
                    {item.formType}
                </span>
            </div>

            {/* Status Badge */}
            <div style={{ flex: 1, minWidth: '120px', maxWidth: '160px', textAlign: 'center' }} className=''>
                <span className={`badge status-badge status-${item.status.toLowerCase()}`}> {item.status} </span>
            </div>

            {/* Action links */}
            <div className="d-flex flex-column align-items-start " style={{ flex: 1, maxWidth: '150px' }}>
                {statusActions[item.status]?.map((action, idx) => (
                <button
                    key={idx}
                    className={`btn btn-sm ${action.className} d-flex align-items-center`}
                    style={{ fontSize: '0.85rem', padding: '0px 5px' }}
                    onClick={action.onClick}
                >
                    <i className={`bi ${action.icon} me-1`}></i> {action.label}
                </button>
                ))}
            </div>
            </div>
        ))}
        </div>

  );
}

  
export default BookingList;