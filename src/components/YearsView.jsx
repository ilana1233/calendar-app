import React from 'react';
import "../styles/YearView.css";


const YearView = ({ clendarDate, onMonthSelect}) => {
    const months = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];

    return (
        <div className="year-grid">
            {months.map((monthName, index) => (
                <div  
                key={index}
                className="month"
                onClick={()=> (
                    onMonthSelect(index + 1)
                )}                
                >
                    {monthName}
                    </div>
          ))}
         
        </div>
    );
};

export default YearView;