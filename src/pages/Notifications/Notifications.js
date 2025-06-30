import MainContainer from "../../components/MainContainer";
import Calendar from "../Home/Calendar";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Notifications(){
    return (
        <MainContainer>
            <div>
                <h1>Notifications Page</h1>
                <p>Welcome to the Notifications page!</p>
            </div>    
            <Calendar />
        </MainContainer>
            );
}


// Sample data for requests
const requestData = [
  { id: 1, name: "John Doe", message: "has sent a Flight Request", time: "3h", status: "pending" },
  { id: 2, name: "Jane Smith", message: "has sent a Flight Request", time: "5h", status: "approved" },
  { id: 3, name: "Mark Lee", message: "has sent a Flight Request", time: "1d", status: "pending" },
  { id: 4, name: "Lucy Brown", message: "has sent a Flight Request", time: "2d", status: "approved" },
];

function RequestList() {
  const [filter, setFilter] = useState("All");

  // Filter requests based on the selected filter
  const filteredRequests = requestData.filter((request) => 
    filter === "All" || request.status === filter.toLowerCase()
  );

  return (
    <MainContainer>

    <div className="container mt-4">
      {/* Filter Buttons */}
      <div className="d-flex justify-content-start mb-3">
        <button 
          className={`btn ${filter === 'All' ? 'btn-warning' : 'btn-outline-warning'}`} 
          onClick={() => setFilter('All')}>
          All
        </button>
        <button 
          className={`btn ${filter === 'Pending' ? 'btn-warning' : 'btn-outline-warning'}`} 
          onClick={() => setFilter('Pending')}>
          Pending
        </button>
        <button 
          className={`btn ${filter === 'Approved' ? 'btn-warning' : 'btn-outline-warning'}`} 
          onClick={() => setFilter('Approved')}>
          Approved
        </button>
      </div>

      {/* Request List */}
      <div className="list-group">
        {filteredRequests.map((request) => (
          <div key={request.id} className="list-group-item d-flex align-items-center">
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

export default RequestList;

// export default Notifications;