import React, { useState } from "react";
import DaysView from "./DaysView";
import YearView from "./YearsView";
import "../styles/Calendar.css";

const Calendar = ({ currentUser,onLogout }) => {
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year,setYear] = useState(new Date().getFullYear());
    
    const nextMonth = () => {
        if(month === 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

     const prevMonth = () => {
        if(month === 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const NextYear = () => 
          
     setYear(year + 1);

    const prevYear = () =>
        
    setYear(year - 1);
        
    


    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className="user-info">
                    <span> שלום, {currentUser}</span>
                    <button className="logout-button" onClick={onLogout}>התנתקות</button>
                </div>
            </div>
            <div className="calendar-control">
                <button onClick={prevYear}>שנה קודמת</button>
                <button onClick={prevMonth}>חודש קודם</button>

            <span className="calendar-title">
                {month} / {year}
            </span>

                <button onClick={nextMonth}>חודש הבא</button>
                <button onClick={NextYear}>שנה הבאה</button>
            </div>
        <div className="yearView">
           < YearView  />
           <DaysView  />
        </div>
        </div>
    );
};

export default Calendar;
