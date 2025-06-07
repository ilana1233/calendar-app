import React,{useEffect, useState} from 'react';
// import YearView from './components/YearsView';
import Calendar from "./components/Calendar";
import Login from "../src/components/Login";
import Register from './components/Register';
import "../src/styles/YearView.css";

const App = () => {
  const [isLoggeIn,setLoggeIn] = useState(false);
  const [ isRegistering, setIsRegistering] = useState(false);
  const [ currentUser,setCurrentUser] = useState(null);

  useEffect(() => {
    const savedLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedUser = localStorage.getItem("currentUser");

    if (savedLoggedIn && savedUser) {

      setLoggeIn(true);
      setCurrentUser(savedUser);
    }
    
  }, []);

  const handleLogin = (useName) => {
    setLoggeIn(true);
    setCurrentUser(useName);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", useName);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setLoggeIn(false);
    setCurrentUser(null);
  };

    if (isLoggeIn ) {
      return  <Calendar
      currentUser={currentUser}
      onLogout={handleLogout} />
    }
   

  return (
    <>
    {isRegistering ? (
      <Register onSwitchToLogin={() =>  setIsRegistering(false)} />
    ) : (
      <Login
      onLogin={handleLogin}
      onSwitchToRegister={() =>  setIsRegistering(true)} />
    )}
    </>
  )
};


export default App;
