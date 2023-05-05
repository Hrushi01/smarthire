import { Route, Routes } from "react-router";
import Decide from "../Login-Signup/login/Decide";
import Login from "../Login-Signup/login/Login";
import SignupOrganization from "../Login-Signup/signup/SignupOrganization";
import SignupStudent from "../Login-Signup/signup/SignupStudent";
import Home from "../pages/Home";
import Features from "../pages/Features";
// import Features from "../pages/Features";
import LandingPg from "../pages/LandingPg";
import ChatBot from "../ChatbotComponents/chatbot";
import ResumeBuilder from "../ResumeBuilder/ResumeBuilder";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

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
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/getstarted" element={<LandingPg />} />
        <Route path="/chat" element={<ChatBot />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/user" element={<Decide setStatus={setStatus} />} />
        <Route path="/org-login" element={<Login status={status} />} />
        <Route path="/org-signup" element={<Login status={status} />} />
        <Route path="/student-login" element={<Login status={status} />} />
        <Route path="/student-signup" element={<Login status={status} />} />
        {console.log("Hrushiii", status)}
        <Route
          path="/signup"
          element={
            status === "org" ? (
              <SignupOrganization status={status} />
            ) : status === "student" ? (
              <SignupStudent status={status} />
            ) : (
              <>
                <h1>404 Not Found</h1>
              </>
            )
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />

        {/* <Route path="/getstarted" element={<Features />} /> */}
        {/* <Route path="/features" element={<Features />} /> */}
        {/* <Route path="/features" element={<Features />} /> */}
      </Routes>
    </>
    // <div className="Login-Parent-Comp">
    //   {OrganizationLog ? (
    //     signup ? (
    //       status === "Organization" ? (
    //         <SignupOrganization
    //           status={status}
    //           setSignup={setSignup}
    //           setDisplay={setDisplay}
    //         />
    //       ) : (
    //         <></>
    //       )
    //     ) : (
    //       <Login
    //         setDisplay={setDisplay}
    //         setCandidateLog={setCandidateLog}
    //         setOrganizationLog={setOrganizationLog}
    //         setShow={setShow}
    //         isLogged={isLogged}
    //         setIsLoggedIn={setIsLoggedIn}
    //         refresher={refresher}
    //         setRefresher={setRefresher}
    //         status={status}
    //         setSignup={setSignup}
    //         OrganizationLog={OrganizationLog}
    //         candidateLog={candidateLog}
    //       />
    //     )
    //   ) : candidateLog ? (
    //     signup ? (
    //       status === "Student" ? (
    //         <SignupStudent
    //           status={status}
    //           setSignup={setSignup}
    //           setDisplay={setDisplay}
    //           setIsLoggedIn={setIsLoggedIn}
    //           setRefresher={setRefresher}
    //           refresher={refresher}
    //         />
    //       ) : (
    //         <></>
    //       )
    //     ) : (
    //       <Login
    //         setDisplay={setDisplay}
    //         OrganizationLog={OrganizationLog}
    //         candidateLog={candidateLog}
    //         setCandidateLog={setCandidateLog}
    //         setOrganizationLog={setOrganizationLog}
    //         setShow={setShow}
    //         isLogged={isLogged}
    //         setIsLoggedIn={setIsLoggedIn}
    //         refresher={refresher}
    //         setRefresher={setRefresher}
    //         status={status}
    //         setSignup={setSignup}
    //       />
    //     )
    //   ) : (
    //     <Decide
    //       setDisplay={setDisplay}
    //       setOrganizationLog={setOrganizationLog}
    //       setCandidateLog={setCandidateLog}
    //       setStatus={setStatus}
    //     />
    //   )}
    // </div>
  );
};

export default WithoutLogin;
