import Decide from "../Login-Signup/login/Decide";
import Login from "../Login-Signup/login/Login";
import "./withoutLogin.css";
import SignupOrganization from "../Login-Signup/signup/SignupOrganization";
import SignupStudent from "../Login-Signup/signup/SignupStudent";

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
          status === "Organization" ? (
            <SignupOrganization
              status={status}
              setSignup={setSignup}
              setDisplay={setDisplay}
            />
          ) : (
            <></>
          )
        ) : (
          <Login
            setDisplay={setDisplay}
            setCandidateLog={setCandidateLog}
            setOrganizationLog={setOrganizationLog}
            setShow={setShow}
            isLogged={isLogged}
            setIsLoggedIn={setIsLoggedIn}
            refresher={refresher}
            setRefresher={setRefresher}
            status={status}
            setSignup={setSignup}
            OrganizationLog={OrganizationLog}
            candidateLog={candidateLog}
          />
        )
      ) : candidateLog ? (
        signup ? (
          status === "Student" ? (
            <SignupStudent
              status={status}
              setSignup={setSignup}
              setDisplay={setDisplay}
            />
          ) : (
            <></>
          )
        ) : (
          <Login
            setDisplay={setDisplay}
            OrganizationLog={OrganizationLog}
            candidateLog={candidateLog}
            setCandidateLog={setCandidateLog}
            setOrganizationLog={setOrganizationLog}
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
