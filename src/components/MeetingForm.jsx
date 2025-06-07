import React, {useState} from 'react';
import "../styles/MeetingForm.css";

const MeetingForm = ({ date, onSave, oncancel}) => {
    const [title,setTitle] = useState("");
    const [time,setTime] = useState("");
    const [descripion,setDescripion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !time) return;

        const newMeeting = {
            id: Date.now(),
            title,time,descripion,date,
        };

        onSave(newMeeting);
        setTitle("");
        setTime("");
        setDescripion("");
    };

    return (
        <div className='meeting-form-container'>
            <h3>פגישה חדשה</h3>
            <form onSubmit={handleSubmit} className='meeting-form'>
                <label>כותרת:
                    <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </label>

                <label>שעה:
                    <input
                    type='time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    />
                </label>

                <label>תיאור:
                    <iextarea 
                    value={descripion}
                    onChange={(e) => setDescripion(e.target.value)}
                    required
                    />
                </label>

                <div className='form-buttons'>
                    <button 
                    type='submit'>שמור</button>

                    <button type='button-onClick={onCancel}'>ביטול</button>
                </div>
            </form>
        </div>
    );
};

export default MeetingForm;
