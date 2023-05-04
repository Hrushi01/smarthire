import React, { useState } from "react";
import { Route, Routes } from "react-router";

import SidebarOrg from "../organization/Sidebar/SideNavButton";
import SidebarStudent from "../Student/Sidebar/SideNavButton";
import Addstudent from '../organization/AddStudent/AddStudent';
function WithLogin({ status, setStatus }) {
  return (
    <div>
      {status === "org" ? (
        <>
          <SidebarOrg />
          <Routes>
            <Route path="/" element={<Addstudent />} />
          </Routes>
        </>
      ) : status === "student" ? (
        <>
          <SidebarStudent />
        </>
      ) : (
        <>Somthing went wrong...</>
      )}
    </div>
  );
}

export default WithLogin;
