import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../login/Navbar';
import Sidenaav from '../components/Sidebar/sidenaav';
import AddStudent from '../components/AddStudent/AddStudent';
import NewInterview from '../components/NewInterview/NewInterview';
function WithLogin() {
  return (
    <div className="App">
      <Sidenaav/>
      <BrowserRouter>
      <Routes>
            <Route
              path="/"
              element={<Sidenaav/>}
            />
            <Route
              path="/newinterview"
              element={<NewInterview/>}
            />
            <Route
              path="/addstudents"
              element={<AddStudent/>}
            />
           
           <Route
              path="/viewresults"
              element={<NewInterview/>}
            />
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default WithLogin