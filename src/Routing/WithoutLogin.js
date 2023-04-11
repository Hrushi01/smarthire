import Decide from "../Login-Signup/login/Decide";
import Login from "../Login-Signup/login/Login";
import "./withoutLogin.css";

const WithoutLogin = (Props) => {
  const {
    setDisplay,
    setShow,
    OrganizationLog,
    setOrganizationLog,
    candidateLog,
    setCandidateLog,
    isLogged,
    setIsLoggedIn,
    refresher,
    setRefresher,
    setStatus,
    status,
  } = Props;

  return (
    <div className="Login-Parent-Comp">
      {OrganizationLog ? (
        <Login
          setDisplay={setDisplay}
          setCandidateLog={candidateLog}
          setOrganizationLog={OrganizationLog}
          setShow={setShow}
          isLogged={isLogged}
          setIsLoggedIn={setIsLoggedIn}
          refresher={refresher}
          setRefresher={setRefresher}
          status={status}
        />
      ) : candidateLog ? (
        <Login
          setDisplay={setDisplay}
          setCandidateLog={candidateLog}
          setOrganizationLog={OrganizationLog}
          setShow={setShow}
          isLogged={isLogged}
          setIsLoggedIn={setIsLoggedIn}
          refresher={refresher}
          setRefresher={setRefresher}
          status={status}
        />
      ) : (
        <Decide
          setDisplay={setDisplay}
          setOrganizationLog={setOrganizationLog}
          setCandidateLog={setCandidateLog}
          setStatus={setStatus}
        />
      )}
    </div>
  );
};

export default WithoutLogin;