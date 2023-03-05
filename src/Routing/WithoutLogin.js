import Decide from "../login/Decide";
import { useState } from "react";
import Login from "../login/Login";
import "./withoutLogin.css";
const WithoutLogin = (Props) => {
  const {
    show,
    setShow,
    OrganizationLog,
    setOrganizationLog,
    candidateLog,
    setCandidateLog,
  } = Props;

  return (
    <div className="Login-Parent-Comp">
      {OrganizationLog ? (
        <Login
          setCandidateLog={candidateLog}
          setOrganizationLog={OrganizationLog}
          setShow={setShow}
        />
      ) : candidateLog ? (
        <Login
          setCandidateLog={candidateLog}
          setOrganizationLog={OrganizationLog}
          setShow={setShow}
        />
      ) : (
        <Decide
          setOrganizationLog={setOrganizationLog}
          setCandidateLog={setCandidateLog}
        />
      )}
    </div>
  );
};

export default WithoutLogin;
