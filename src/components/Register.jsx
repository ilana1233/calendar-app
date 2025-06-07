import React,{useState} from "react";
import "../styles/Login.css";


const Register = ({ onSwitchToLogin }) => {
    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    

    const handleRegister = (e) => {
        e.preventDefault();

        if(!userName || !password || !confirmPassword) {
            alert("נא למלאאת כל השדות");
            return;
        }

        if (password !== confirmPassword) {
            alert("הסיסמאות אינם תואמות");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || {};

        if(users[userName]){
            alert("שם משמש כבר קיים");
            return;
        }

        users[userName] = password;
        localStorage.setItem("users",JSON.stringify(users));
        alert("נרשמתבהצלחה! אפשר עכשיו להתחבר.");
        onSwitchToLogin();
    };

    return (
        <div className="login-container">
            <form onSubmit={handleRegister}>
            <div className="login-form">
                <h2>הרשמה</h2>
                <input
                type="text"
                placeholder="שם משתמש"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                />

                <input
                type="password"
                placeholder="סיסמא"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <input
                type="password"
                placeholder="אימות סיסמא"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            <button type="submit">הרשם</button>
            <p>כבר יש לך משתמש?{" "}</p>

            <button type="button" onClick={onSwitchToLogin}>התחבר</button>
            
            
            </div>
            </form>
        </div>
    );
};

export default Register;
