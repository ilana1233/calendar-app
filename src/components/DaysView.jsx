import React, {useState, useEffect} from "react";
import MeetingForm from "../components/MeetingForm";
import "../styles/DayView.css";


const DaysView = ({ day, month, year}) => {
    const [showForm, setshowForm] = useState(false);
    const [meetings, setMeetings] = useState([]);

        const dateKey = `${year}-${month}-${day}`;

        //טוען פגישות\
        useEffect(() => {
            const saved = localStorage.getItem("meetings");
            if (saved) {
                const data = JSON.parse(saved);
                if(data[dateKey]){
                    setMeetings(data[dateKey]);
                }
            }
        }, [dateKey]);
        
        //שומר פגישה.
        const handleSaveMeeting = (meeting)  => {
            const saved = JSON.parse(localStorage.getItem("meeting")) || {};
            const updated = {
                ...saved,
                [dateKey]: [...(saved[dateKey] || []), meeting],
            };
            localStorage.setItem("meetings", JSON.stringify(updated));
                setMeetings(updated[dateKey]);
                setshowForm(false);      
        };

        // const handleDeleteMeeting = (indexToDelete) => {
        //     const updatesMeetings = meetings.filter((_, i) => i ===
        // indexToDelete);
        // const allMeetings =
        //     JSON.parse(localStorage.getItem("meetings")) || {};
        //     allMeetings[dateKey] =  updatesMeetings;
        // localStorage.setItem("meetings", JSON.stringify(allMeetings));
        // setMeetings(updatesMeetings);
        // };
    
    return (
        <div className="day-view" onClick={() => setshowForm(true)}>
          <div className="day-number">{day}
            {meetings.length > 0 && (

            
        <div className="tooltip-wrapper">
            <div className="meeting-indicator">V</div>
            <div className="tooltip-content">
                <strong>פגישות:</strong>
                <ul>
                    {meetings.map((m,idx) => (
                        <li key={idx} style={{display: "flex", justifyContent: "space-between", gap: "5px"}}>
                          <span>{m.time} - {m.title}</span>
                          <button onClick={(e) => { 
                            e.stopPropagation();

                          }} style={{background:"transparent",
                           border:"none",color: "red", fontWeight:"bold",cursor:"pointer"}}
                           title="מחק פגישה X">
                            </button>  
                        </li>
                    ))} 
                    </ul>
            </div>
        </div>
            )}

            {showForm && (
                <MeetingForm
                date={dateKey}
                onSave={handleSaveMeeting}
                oncancel={() =>
                     setshowForm(false)} />
            )}
            </div>
        </div>
    );
};

export default DaysView;

