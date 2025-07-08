import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss';

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
    <div className="date-time-container">
        {/* Date and Time Column */}
        <div className="card-container">
            {/* Date */}
            <div className='card card-date'>
                <span className="fs-4 fw-semibold text-dark">{now.toLocaleDateString('en-US', { weekday: 'long' })}</span>
                <span className="fs-1 fw-bold" style={{ color: 'var(--tforange-color)' }}>{now.getDate()}</span>
                <span>{now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>

            {/* Time */}
            <div className='card card-time'>
                <span className="fs-1 fw-bold">{time}</span>            
                <span className="fs-3 fw-bold">{ampm}</span>
            </div>
        </div>

        {/* Calendar Date picker */}
        <div className="calendar-container">
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
              className="calendar-reset-btn"
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
            >
              Clear Date Range
            </button>
          )}            
        </div>
    </div>
  );
}

export default Calendar;