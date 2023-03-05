import React from "react";
import Button from "@mui/material/Button";
import "./Decide.css";
import student from "./images/1.png";
import admin from "./images/2.png";

function Decide(props) {
  const {
    setCandidateLog,
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
            setOrganizationLog(true);
            setCandidateLog(false);
          }}>
          <img src={admin} alt="admin" className="pic" />
          Organization
        </Button>
        <Button
          type="button"
          className="Btn-Account-Type"
          onClick={() => {
            setOrganizationLog(false);
            setCandidateLog(true);
          }}>
          <img src={student} alt="student" className="pic" />
          Candidate
        </Button>
      </div>

    </div>
  );
}

export default Decide;
