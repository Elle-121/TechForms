import MainContainer from "../../components/MainContainer";
import Calendar from "../Home/Calendar";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Sample data for requests
const requestData = [
    { id: 1, name: "John Doe", message: "has sent a Flight Request", time: "3h", status: "pending", read: false },
    { id: 2, name: "Jane Smith", message: "has sent a Flight Request", time: "5h", status: "approved", read: true },
    { id: 3, name: "Mark Lee", message: "has sent a Flight Request", time: "1d", status: "pending", read: false },
    { id: 4, name: "Lucy Brown", message: "has sent a Flight Request", time: "2d", status: "approved", read: true },
  ];

const filterOptions = ["All", "Read", "Unread"];

function Notifications() {
  const [filter, setFilter] = useState("All");

  // Filter requests based on the selected filter
  const filteredRequests = requestData.filter((request) => {
    if (filter === "All") return true;
    if (filter === "Read") return request.read;
    if (filter === "Unread") return !request.read;
    return true;
  });
  return (
    <MainContainer>

    <div className="container mt-4">
      {/* Filter Buttons */}
      <div className="d-flex justify-content-start mb-3 " style={{ padding: '10px', borderRadius: '5px', backgroundColor: 'var(--tforange-color)' }}>
        {filterOptions.map((option) => (
            <button 
                className={`notif-filter-btn ${filter === option ? 'selected' : ''}`} 
                onClick={() => setFilter(option)}>
                {option}
            </button>
        ))}
      </div>

      {/* Request List */}
      <div className="list-group ">
      {filteredRequests.map((request) => (
        <div
            key={request.id}
            className={`list-group-item d-flex align-items-center ${request.read ? 'read' : 'unread'}`}
            style={request.read ? { opacity: 0.6 } : { fontWeight: 'bold' }}
        >
            <div
            className={`rounded-circle ${request.status === 'pending' ? 'bg-warning' : 'bg-secondary'}`}
            style={{ width: '15px', height: '15px', marginRight: '15px' }}
            ></div>
                <div>
                    <p className="mb-1">
                        <strong>{request.name}</strong> {request.message}
                    </p>
                    <small className="text-muted">{request.time}</small>
                </div>
            <button className="btn btn-outline-primary ms-auto">Review the request</button>
        </div>
        ))}
      </div>
    </div>
    </MainContainer>
  );
}

export default Notifications;

// export default Notifications;