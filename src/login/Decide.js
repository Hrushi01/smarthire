import React from "react";
import Button from "@mui/material/Button";
import "./Decide.css";
import logo from "./images/Keystone_logo.png";
import student from "./images/1.png";
import mentor from "./images/3.png";
import admin from "./images/2.png";

function Decide(props) {
  const {
    candidateLog,
    setCandidateLog,
    organizationLog,
    setOrganizationLog,
  } = props;
  return (
    <div className="decide">
      <h1>Select User Type</h1>

      <div className="loginButtons">
        <Button
          type="button"
          className="Btn-Account-Type"
          onClick={() => {
            setCandidateLog(false);
            setOrganizationLog(true);
          }}>
          <img src={admin} alt="admin" className="pic" />
          Organization
        </Button>
        <Button
          type="button"
          className="Btn-Account-Type"
          onClick={() => {
            setCandidateLog(true);
            setOrganizationLog(false);
          }}>
          <img src={student} alt="student" className="pic" />
          Candidate
        </Button>
      </div>

    </div>
  );
}

export default Decide;
