import React from "react";
import { Route, Routes } from "react-router-dom";
import SidebarOrg from "../organization/Sidebar/SideNavButton";
import SidebarStudent from "../Student/Sidebar/SideNavButton";
import OrganizationProfile from "../organization/pages/OrganizationProfile";
import NewInterview from "../organization/NewInterview/NewInterview";
import AddStudent from "../organization/AddStudent/AddStudent";
import Results from "../organization/Results/Results";
import StudentProfilePage from "../Student/pages/StudentProfilePage";
import InterviewShow from "../Student/InterviewShow";
function WithLogin({ status, setStatus, setIsLoggedIn }) {
  return (
    <div>
      {status === "org" ? (
        <>
          <SidebarOrg setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/" element={<OrganizationProfile />} />
            <Route path="/profile" element={<OrganizationProfile />} />
            <Route path="/newinterview" element={<NewInterview />} />
            <Route path="/addstudents" element={<AddStudent />} />
            <Route path="/viewresults" element={<Results />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </>
      ) : status === "student" ? (
        <>
          <SidebarStudent setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/" element={<StudentProfilePage />} />
            <Route path="/profile" element={<StudentProfilePage />} />
            <Route path="/interview" element={<InterviewShow />} />
            <Route path="/viewresults" element={<Results />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </>
      ) : (
        <>Somthing went wrong...</>
      )}
    </div>
  );
}

export default WithLogin;
