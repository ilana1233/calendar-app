import React, { useState, useEffect } from "react";
import MeetingForm from "../components/MeetingForm";
import "../styles/DayView.css";

const DaysView = ({ month, year, calendarDate }) => {
  const [showForm, setShowForm] = useState(false);
  const [meetings, setMeetings] = useState({});
  const weekdays = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay(); // תקין

  const dateKey = `${month},${year}`;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("meetings")) || {};
    setMeetings(saved[dateKey] || {});
  }, [dateKey]);

  const handleSaveMeeting = (day, meeting) => {
    const saved = JSON.parse(localStorage.getItem("meetings")) || {};
    const updatedDayMeetings = [...(saved[dateKey]?.[day] || []), meeting];
    const updated = {
      ...saved,
      [dateKey]: {
        ...saved[dateKey],
        [day]: updatedDayMeetings,
      },
    };
    localStorage.setItem("meetings", JSON.stringify(updated));
    setMeetings(updated[dateKey]);
    setShowForm(false);
  };

  const handleDeleteMeeting = (day, indexToDelete) => {
    const saved = JSON.parse(localStorage.getItem("meetings")) || {};
    const updatedDayMeetings =
      saved[dateKey]?.[day]?.filter((_, i) => i !== indexToDelete) || [];
    const updated = {
      ...saved,
      [dateKey]: {
        ...saved[dateKey],
        [day]: updatedDayMeetings,
      },
    };
    localStorage.setItem("meetings", JSON.stringify(updated));
    setMeetings(updated[dateKey]);
  };

  const getEventsForDay = (day) => {
    if (calendarDate) {
      return calendarDate.filter(
        (event) =>
          event.day === day && event.month === month && event.year === year
      );
    } else {
      return meetings?.[day] || [];
    }
  };

  const blanks = Array(firstDay).fill(null);

  return (
    <div className="day-view">
      <div className="weekdays-row">
        {weekdays.map((dayName, index) => (
          <div key={index} className="weekday">
            {dayName}
          </div>
        ))}
      </div>

      <div className="day-view">
        <div className="day-grid">
        {blanks.map((_, i) => (
          <div key={`b-${i}`} className="day.empty"></div>
          
        ))}

        {[...Array(daysInMonth)].map((_, index) => {
          const dayNumber = index + 1;
          const events = getEventsForDay(dayNumber);
            
          return (
            <div key={index} className="day">
              <strong>{dayNumber}</strong>

              {events.map((event, idx) => (
                <div key={idx} className="event">
                  {event.title}
                  <button onClick={() => handleDeleteMeeting(dayNumber, idx)}>
                    ❌
                  </button>
                </div>
                
              ))}

              <button onClick={() => setShowForm(dayNumber)}>
                ➕ הוסף</button>

              {showForm === dayNumber && (
                <MeetingForm
                  onSave={(meeting) => handleSaveMeeting(dayNumber, meeting)}
                  onCancel={() => setShowForm(false)}
                  
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
 </div>
  );
};

export default DaysView;