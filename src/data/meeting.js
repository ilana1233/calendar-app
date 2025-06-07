export const loadMeetings = (username) => {
    const all = JSON.parse(localStorage.getItem("meeting")) || {};
    return all [username] || {};
};

export const saveMeetings =  (username,data) => {
    const all = JSON.parse(localStorage.getItem("meetings")) || {};
    all[username] = data;
    localStorage.setItem("meetings",JSON.stringify(all));
};

export const addMeeting = (username,dateKay,meeting) => {
    const userMeetings = loadMeetings(username);
    const updated = {
        ...userMeetings,[dateKay]: [...addMeeting(userMeetings[dateKay] || []), meeting],
    };
    saveMeetings(username,updated);
    return updated[dateKay];
};

export const deleteMeeting = (username,dateKay,index) => {
    const userMeetings = loadMeetings(username);
    if(!userMeetings[dateKay])
        return;

    userMeetings[dateKay].splice(index,1);
    saveMeetings(username,userMeetings);
    return userMeetings[dateKay];
};
