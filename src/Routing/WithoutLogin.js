import Decide from "../login/Decide";
import { useState } from "react";
import Login from "../login/Login";
import "./withoutLogin.css";
const WithoutLogin = (Props) => {
  const [OrganizationLog, setOrganizationLog] = useState(false);
  const [candidateLog, setCandidateLog] = useState(false);
  const { show, setShow } = Props;

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
