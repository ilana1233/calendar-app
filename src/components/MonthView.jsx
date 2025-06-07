import React from "react";
import dayjs from "dayjs";
import DayView from "../components/DaysView";
import "../styles/MonthView.css";

const MonthView = ({ month}) => {
    const today = dayjs();
    const year = today.year();
    const daysInMonth = dayjs(`${year}-${month}`).daysInMonth();
    // const firstDay = Date.day(); 
    //  Sunday = 0 ;
    const weekdays = ["ש","ו","ה","ד","ג","ב","א"]

    return(
        <div className="month-view">
            <h2 className="month-title">
                {dayjs(`${year}-${month}-01`).format("MMM")}
            </h2>
            <div className="weekday-colums">
                {weekdays.map((day, i) => (
                    <div key={i}
                    className="weekday-cell">
                        {day}
                    </div>
                ))}
            </div>

            <div className="day-grid">
                {Array.from({ length: daysInMonth }, (_, i) => (
                    <DayView key={i} day={i + 1} month={month} year={year} />
                ))}
            </div>
        </div>
    );
};

export default MonthView;
