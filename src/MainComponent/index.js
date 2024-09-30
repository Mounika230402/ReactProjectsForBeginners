import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from "./MainComponent";
import LogoPage from "./LogoPage";

const Index = (props) => {
  return (
 
       <BrowserRouter>
    <Routes>
        <Route path="/" element={<LogoPage/>}/>
      <Route path="/Main" element={<MainComponent/>}/>
      </Routes>

    </BrowserRouter>
  )
};

export default Index;
