import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss'

const styles = {
    card: {
      border: '1px solid var(--tforange-color)',
      borderRadius: '10%',
      padding: '1rem',
      textAlign: 'left',
      backgroundColor: '#fff',
      color: '#000',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      width: '170px',
      height: '170px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.25rem',
    },

    column: {
      height: '340px', // Match the calendar height
      minHeight: '340px',
      maxHeight: '340px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },

    resetbutton:{
      // width: '100%',
      margin: '1rem 0 0 auto',
      border: '1px solid var(--tforange-color)',
      borderRadius: '10px',
      minWidth: '200px',
      maxWidth: '200px',
      display: 'block',
      marginTop: '1rem',
      backgroundColor: 'var(--tforange-color)',
      
    }
  };

function Calendar() {
  const [now, setNow] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  const [time, ampm] = timeString.split(' ');

  return (
    <div className="row">
        {/* Date and Time Column */}
        <div className="col-auto  border-black" style={styles.column}>
            {/* Date */}
            <div style={styles.card}>
                <span className="fs-4 fw-semibold text-dark">{now.toLocaleDateString('en-US', { weekday: 'long' })}</span>
                <span className="fs-1 fw-bold" style={{ color: 'var(--tforange-color)' }}>{now.getDate()}</span>
                <span>{now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>

            {/* Time */}
            <div style={{ ...styles.card, justifyContent:'center', alignItems:'center', backgroundColor: 'var(--tfblue-color)', color: '#fff', border: '1px solid var(--tfblue-color)',}}>
                <span className="fs-1 fw-bold">{time}</span>            
                <span className="fs-3 fw-bold">{ampm}</span>
            </div>
        </div>

        {/* Calendar Date picker */}
        <div className="col" style={{ width: '320px', minWidth: '320px', maxWidth: '320px', height: '340px', minHeight: '340px', maxHeight: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setDateRange(update)}
                isClearable={true}
                inline
            />
        </div>
        {startDate && endDate && (
          <button
            type="button"
            onClick={() => setDateRange([null, null])}
            className="btn btn-secondary mt-2 reset-btn"
          >
            Clear Date Range
          </button>
        )}            
    </div>
  );
}

export default Calendar;