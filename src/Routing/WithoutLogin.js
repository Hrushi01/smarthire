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
        />
      ) : (
        <Decide
          setDisplay={setDisplay}
          setOrganizationLog={setOrganizationLog}
          setCandidateLog={setCandidateLog}
        />
      )}
    </div>
  );
};

export default WithoutLogin;
