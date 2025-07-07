
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchBar({setSearchValue}) {
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
            width: '400px',
          }}
          onChange={(e) => setSearchValue(e.target.value)}
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
    </div>
  );
}