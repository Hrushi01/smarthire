import Decide from "../login/Decide";
import Login from "../login/Login";
import "./withoutLogin.css";
const WithoutLogin = (Props) => {
  const {
    setShow,
    OrganizationLog,
    setOrganizationLog,
    candidateLog,
    setCandidateLog,
    isLogged, setIsLoggedIn,
    refresher, setRefresher
  } = Props;

  return (
    <div className="Login-Parent-Comp">
      {OrganizationLog ? (
        <Login
          setCandidateLog={candidateLog}
          setOrganizationLog={OrganizationLog}
          setShow={setShow}
          isLogged={isLogged}
          setIsLoggedIn={setIsLoggedIn}
          refresher={refresher} setRefresher={setRefresher}

        />
      ) : candidateLog ? (
        <Login
          setCandidateLog={candidateLog}
          setOrganizationLog={OrganizationLog}
          setShow={setShow}
          isLogged={isLogged}
          setIsLoggedIn={setIsLoggedIn}
          refresher={refresher} setRefresher={setRefresher}

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
