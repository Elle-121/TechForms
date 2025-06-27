
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBarWithFilter() {
  return (
    <div className="d-flex align-items-center gap-3">
      {/* Search Bar */}
      <div
        className="d-flex align-items-center"
        style={{
          backgroundColor: '#f5f5f8',
          borderRadius: '30px',
          padding: '5px 10px',
        }}
      >
        <input
          type="text"
          className="form-control border-0 shadow-none"
          placeholder="Search Request"
          style={{
            backgroundColor: 'transparent',
            borderRadius: '30px',
            paddingLeft: '10px',
            fontSize: '14px',
            width: '200px',
          }}
        />
        <button
          className="btn d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: '#f7931e',
            borderRadius: '50%',
            padding: '6px',
            width: '32px',
            height: '32px',
          }}
        >
          <i className="bi bi-search" style={{ color: 'white', fontSize: '16px' }}></i>
        </button>
      </div>

      {/* Filter by */}
      <div className="d-flex align-items-center" style={{ gap: '6px', cursor: 'pointer' }}>
        <span style={{ color: '#555', fontSize: '14px' }}>Filter by</span>
        <i className="bi bi-filter" style={{ fontSize: '18px', color: '#555' }}></i>
      </div>
    </div>
  );
}

export default SearchBarWithFilter;
