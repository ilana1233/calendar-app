import React, {useState} from "react";
import "../styles/Login.css";

 const Login = ({ onLogin, onSwitchToRegister,  onSwitchToLogin}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        
        const users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[userName] && users[userName] === password) {
            localStorage.setItem("isLoggedIn","true");

            localStorage.setItem("currentUser", userName);
            onLogin();
        } else{
            alert("עובר להתחבר");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSumbit}>
            <div className="login-form">
                <h2>התחברות ליומן</h2>
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
                <button type="submit">התחבר</button>
                <p>אין לך חשבון?{" "}</p>

                   <button type="submit" onClick={onSwitchToRegister}>
                    עדיין אין לך הרשמה? הרשמה
                   </button>

                   <button type="button" onClick={onSwitchToLogin}>חזרה להתחברות</button>
                   
            </div>
            </form>
        </div>
    );
};

export default Login;