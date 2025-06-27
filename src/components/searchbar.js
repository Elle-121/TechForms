import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (
    <div className="d-flex align-items-center" style={{ backgroundColor: '#f5f5f8', borderRadius: '30px', padding: '5px 10px', width: 'fit-content' }}>
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
        className="btn"
        style={{
          backgroundColor: '#f7931e', // orange
          borderRadius: '50%',
          padding: '6px 10px',
        }}
      >
        <i className="bi bi-search" style={{ color: 'white', fontSize: '16px' }}></i>
      </button>
    </div>
  );
}

export default SearchBar;
