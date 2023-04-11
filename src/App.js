import "./components/InterviewCam.css";
import { useState, useEffect } from "react";
import WithLoginOrganization from "./Routing/WithLoginOrganization";
import WithoutLogin from "./Routing/WithoutLogin";
import WithLoginStudent from "./Routing/WithLoginStudent";
import Cookies from "universal-cookie";
import AboutUs from "./pages/AboutUs";
import LandingPg from "./pages/LandingPg";
import ChatBot from "./ChatbotComponents/chatbot";
import ResumeBuilder from "./ResumeBuilder/ResumeBuilder";
import Signup from "./Login-Signup/signup/Signup";

function App() {
  const [Display, setDisplay] = useState("home");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [OrganizationLog, setOrganizationLog] = useState(false);
  const [candidateLog, setCandidateLog] = useState(false);
  const [isLogged, setIsLoggedIn] = useState(false);
  const [refresher, setRefresher] = useState(true);
  const cookies = new Cookies();

  useEffect(() => {
    const CheckAlreadyLogin = cookies.get("SmartToken");
    if (CheckAlreadyLogin) {
      setIsLoggedIn(true);
      console.log("0009", CheckAlreadyLogin);
    }
  }, [refresher]);

  return (
    <Signup />
    // <div>
    //   {Display === "home" ? (
    //     <LandingPg setDisplay={setDisplay} />
    //   ) : Display === "about" ? (
    //     <AboutUs setDisplay={setDisplay} />
    //   ) : Display === "chatbot" ? (
    //     <ChatBot setDisplay={setDisplay} />
    //   ) : Display === "resumebuilder" ? (
    //     <ResumeBuilder setDisplay={setDisplay} />
    //   ) : Display === "interview" ? (
    //     isLogged ? (
    //       OrganizationLog ? (
    //         <WithLoginOrganization
    //           OrganizationLog={OrganizationLog}
    //           setOrganizationLog={setOrganizationLog}
    //           candidateLog={candidateLog}
    //           setCandidateLog={setCandidateLog}
    //         />
    //       ) : (
    //         <WithLoginStudent
    //           OrganizationLog={OrganizationLog}
    //           setOrganizationLog={setOrganizationLog}
    //           candidateLog={candidateLog}
    //           setCandidateLog={setCandidateLog}
    //           refresher={refresher}
    //           setRefresher={setRefresher}
    //         />
    //       )
    //     ) : (
    //       <WithoutLogin
    //         setDisplay={setDisplay}
    //         show={show}
    //         setShow={setShow}
    //         OrganizationLog={OrganizationLog}
    //         setOrganizationLog={setOrganizationLog}
    //         candidateLog={candidateLog}
    //         setCandidateLog={setCandidateLog}
    //         isLogged={isLogged}
    //         setIsLoggedIn={setIsLoggedIn}
    //         refresher={refresher}
    //         setRefresher={setRefresher}
    //         setStatus={setStatus}
    //         status={status}
    //       />
    //       // <WithLoginOrganization
    //       //   OrganizationLog={OrganizationLog}
    //       //   setOrganizationLog={setOrganizationLog}
    //       //   candidateLog={candidateLog}
    //       //   setCandidateLog={setCandidateLog}
    //       // />
    //     )
    //   ) : (
    //     <></>
    //   )}
    // </div>
  );
}

export default App;
