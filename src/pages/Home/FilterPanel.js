import React, { useState } from 'react';
import archiveicon from '../../assets/ArchiveIcon.svg'
import bookmarkicon from '../../assets/BookmarkIcon.svg'
import smallcheckicon from '../../assets/SmallcheckIcon.svg'
import totalreqicon from '../../assets/TotalReqIcon.svg'
import rejectedicon from '../../assets/RejectedIcon.svg'


// Syles for the Cards
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

// Request Stats Data
const requestStats = [
  { icon: archiveicon, label: 'Total Requests', count: 12 },
  { icon: bookmarkicon, label: 'Pending Requests', count: 5 },
  { icon: smallcheckicon, label: 'Approved Requests', count: 7 },
  { icon: rejectedicon, label: 'Rejected Requests', count: 21 },
  { icon: totalreqicon, label: 'Requests This Month', count: 3 },

];

function onFilter(filter) {
    return;
  }

// Functions -- Filter Card and Filter Panels
// FilterCard component
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
        onClick={onClick} 
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
  
  function FilterPanels({activeFilter }) {
    const filterKeys = ['ALL', 'Pending', 'Approved', 'Rejected', 'ThisMonth'];
    return (
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        {requestStats.map((stat, idx) => (
            <div style={{ flex: 1 }} key={stat.label}>
            <FilterCard
              {...stat}
              active={activeFilter === filterKeys[idx]}
              onClick={() => onFilter(filterKeys[idx])}
            />
          </div>
        ))}
      </div>
    );
  }
  export default FilterPanels;

  