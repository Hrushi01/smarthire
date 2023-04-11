import Decide from "../Login-Signup/login/Decide";
import Login from "../Login-Signup/login/Login";
import "./withoutLogin.css";
import SignupFields from "../Login-Signup/signup/SignupFields";

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
    setSignup,
    signup,
  } = Props;

  return (
    <div className="Login-Parent-Comp">
      {OrganizationLog ? (
        signup ? (
          <SignupFields
            status={status}
            setSignup={setSignup}
            setDisplay={setDisplay}
          />
        ) : (
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
            setSignup={setSignup}
          />
        )
      ) : candidateLog ? (
        signup ? (
          <SignupFields
            status={status}
            setSignup={setSignup}
            setDisplay={setDisplay}
          />
        ) : (
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
            setSignup={setSignup}
          />
        )
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
