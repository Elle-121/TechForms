import React, { useState } from 'react';
import archiveicon from '../../assets/ArchiveIcon.svg'
import bookmarkicon from '../../assets/BookmarkIcon.svg'
import smallcheckicon from '../../assets/SmallcheckIcon.svg'
import totalreqicon from '../../assets/TotalReqIcon.svg'

const styles = {
  card: {
    border: '1px solid #f4a000',
    borderRadius: '10px',
    padding: '1rem',
    textAlign: 'left',
    backgroundColor: '#fff',
    color: '#000',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    height: '100%',
  },
  hover: {
    backgroundColor: '#f4a000',
    color: '#fff',
  },
  icon: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  label: {
    fontWeight: 500,
  },
  count: {
    fontSize: '3rem',
    fontWeight: 700,
    color: 'var(--tfblue-color)',
  },
};

const requestStats = [
  { icon: archiveicon, label: 'Total Requests', count: 12 },
  { icon: bookmarkicon, label: 'Pending Requests', count: 5 },
  { icon: smallcheckicon, label: 'Approved Requests', count: 7 },
  { icon: totalreqicon, label: 'Requests This Month', count: 3 },
];

function FilterCard({ icon, label, count, onClick }) {
    const [hovered, setHovered] = useState(false);
  
    const cardStyle = hovered
      ? { ...styles.card, ...styles.hover }
      : styles.card;
    const countStyle = hovered
      ? { ...styles.count, color: '#fff' }
      : styles.count;
  
    return (
      <div
        style={cardStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick} // <-- add this
      >
        <img src={icon}
          style={{
              filter: hovered ? 'brightness(0) invert(1)' : 'none',
              transition: 'filter 0.3s',
              marginBottom: '0.5rem',
              height: '32px', 
          }}/>
        <div style={styles.label}>{label}</div>
        <div style={countStyle}>{count}</div>
      </div>
    );
  }
  
  function FilterPanels({ onFilter }) {
    return (
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-md-3">
          <FilterCard {...requestStats[0]} onClick={() => onFilter('ALL')} />
        </div>
        <div className="col-sm-6 col-md-3">
          <FilterCard {...requestStats[1]} onClick={() => onFilter('Pending')} />
        </div>
        <div className="col-sm-6 col-md-3">
          <FilterCard {...requestStats[2]} onClick={() => onFilter('Approved')} />
        </div>
        <div className="col-sm-6 col-md-3">
          <FilterCard {...requestStats[3]} onClick={() => onFilter('ThisMonth')} />
        </div>
      </div>
    );
  }
  
  export default FilterPanels;