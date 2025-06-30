import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.25rem',
      width:'150px',
    },
  };

function Calendar() {
  const [now, setNow] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="row">
      {/* Date and Time Column */}
      <div className="col-auto">
        <div style={{ marginBottom: '' }}>
          <div style={styles.card}>
            <span className="fs-4 fw-semibold text-dark">{now.toLocaleDateString('en-US', { weekday: 'long' })}</span>
            <span className="fs-4 fw-bold text-dark">{now.getDate()}</span>
            <span>{now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>
          <div style={styles.card}>
            {now.toLocaleTimeString()}
          </div>
        </div>
      </div>
  
      {/* DatePicker Column */}
      <div className="col">
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update)}
          isClearable={true}
          inline
        />
      </div>
    </div>
  );
}


//   return (
//     <div className='row'  >
//         {/* Date and Time */}
//         <div className="col-auto" style={{marginBottom: '' }}>
//             {/* Date */}
//             <div style={styles.card}>
//                 {/* Day */}
//                 <span className="fs-4 fw-semibold text-dark">{now.toLocaleDateString('en-US', { weekday: 'long' })}</span>
//                 {/* Date */}
//                 <span className="fs-4 fw-bold text-dark">{now.getDate()}</span>
//                 {/* Month & Year */}
//                 <span className="">{now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
//             </div>    
                
//             {/* Time */}
//             <div style={styles.card}>
//                 {now.toLocaleTimeString()}
//             </div>
//         </div>


//         <DatePicker
//             selectsRange
//             startDate={startDate}
//             endDate={endDate}
//             onChange={(update) => setDateRange(update)}
//             isClearable={true}
//             inline
//         />
//     </div>
//   );
// }



export default Calendar;