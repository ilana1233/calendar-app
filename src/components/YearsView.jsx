import React from 'react';
import MonthView from "../components/MonthView";
import "../styles/MonthView.css";


const YearView = () => {
    const month = Array.from({ length:12}, (_, i) => i + 1);

    return (
        <div className="year-view">
            {month.map((month) => (
                <MonthView key={month}
                month={month} />
            ))}
        </div>
    );
};

export default YearView;