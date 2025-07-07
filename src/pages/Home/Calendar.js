import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss'

const styles = {
    column: {
      height: '340px', // Match the calendar height
      minHeight: '340px',
      maxHeight: '340px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },
  };

function Calendar({setHomeDateRange, setFilterValues}) {
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
    <div className="row d-flex alight-items-center">
        {/* Date and Time Column */}
        <div className="column col-auto">
            {/* Date */}
            <div className='card'>
                <span className="fs-4 fw-semibold text-dark">{now.toLocaleDateString('en-US', { weekday: 'long' })}</span>
                <span className="fs-1 fw-bold" style={{ color: 'var(--tforange-color)' }}>{now.getDate()}</span>
                <span>{now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>

            {/* Time */}
            <div className='card-time'>
                <span className="fs-1 fw-bold">{time}</span>            
                <span className="fs-3 fw-bold">{ampm}</span>
            </div>
        </div>

        {/* Calendar Date picker */}
        <div className="col d-flex flex-column align-items-center justify-content-center">
            <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                  setHomeDateRange(update);
                  setFilterValues(prev => ({
                      ...prev,
                      submitted_start: update[0] ? update[0].toLocaleDateString('en-CA') : "",
                      submitted_end: update[1] ? update[1].toLocaleDateString('en-CA') : ""
                  }));
                }}
                isClearable={true}
                inline
            />
          {startDate && endDate && (
            <button
              type="button"
              onClick={() => {
                setDateRange([null, null]);
                setHomeDateRange([null, null]);
                setFilterValues(prev => ({
                  ...prev,
                  submitted_start: "",
                  submitted_end: ""
                }));
              }}
              className="btn btn-secondary mt-2 reset-btn"
            >
              Clear Date Range
            </button>
          )}            
        </div>
    </div>
  );
}

export default Calendar;