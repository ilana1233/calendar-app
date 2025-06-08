import React, { useState } from "react";
import DaysView from "./DaysView";
import YearView from "./YearsView";
import "../styles/Calendar.css";

const Calendar = ({ currentUser,onLogout }) => {
    const  today = new Date();
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [year,setYear] = useState(today.getFullYear());
    const [sharedUser,setSharedUser] = useState("");
    const [sharedCalendar,setSharedCalendar] = useState(null);
    const [selectedMonth, setSelectedMonth] =useState(null);

    const handleViewShared =() => {
        const users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[sharedUser]) {
            setSharedCalendar(users[sharedUser].calendarDate || []);
        } else{
            alert("לא נמצא יומן משתמש זה");
        }
    };
    
    const nextMonth = () => {
        if(month === 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month + 1);
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

    const NextYear = () =>  setYear(year + 1);
    const prevYear = () => setYear(year - 1);
        
    return (
        
    <div className="calendar">
      <div className="calendar-header">
        <div className="user-info">
          <span>שלום, {currentUser}</span>
          <button className="logout-button" onClick={onLogout}>
            התנתקות
          </button>
        </div>
      </div>

      <div className="shared-View">
        <input
          type="text"
          placeholder="הצג יומן של משתמש"
          value={sharedUser}
          onChange={(e) => setSharedUser(e.target.value)}
        />
        <button onClick={handleViewShared}>הצג יומן</button>
      </div>

      {!selectedMonth ? (
        <>
          <div className="calendar-control">
            <button onClick={prevYear}>שנה קודמת</button>
            <span className="calendar-title">{year}</span>
            <button onClick={NextYear}>שנה הבאה</button>
          </div>

          <YearView
            calendarDate={sharedCalendar}
            onMonthSelect={(monthNum) => {
              setSelectedMonth(monthNum);
              setMonth(monthNum);
            }}
          />
        </>
      ) : (
        <>
          <div className="calendar-control">
            <button onClick={prevMonth}>חודש קודם</button>
            <span className="calendar-title">
              {month} / {year}
            </span>
            <button onClick={nextMonth}>חודש הבא</button>
            <button onClick={() => setSelectedMonth(null)}>חזרה לשנה</button>
          </div>

          <DaysView
            month={month}
            year={year}
            calendarDate={sharedCalendar}
          />
        </>
      )}
    </div>
  );
};
             
export default Calendar;
