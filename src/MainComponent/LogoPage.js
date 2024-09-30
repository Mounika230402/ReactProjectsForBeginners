import React from "react"

import { NavLink } from 'react-router-dom';

import logo from '../logo.svg';
const LogoPage = (props) => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        React Project For Beginners
      </p>
      <NavLink to="/Main" style={{color:"#61DBFB"}}>See More</NavLink>
    </header>
  </div>
  )
};

export default LogoPage;
