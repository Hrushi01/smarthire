import "./components/InterviewCam.css";
// import { useState, useEffect } from "react";
// import WithLoginOrganization from "./Routing/WithLoginOrganization";
// import WithoutLogin from "./Routing/WithoutLogin";
// import WithLoginStudent from "./Routing/WithLoginStudent";
// import axios from "axios";
// import Cookies from "universal-cookie";
import { useState } from "react";
import AboutUs from "./Pages/AboutUs";
import LandingPg from "./Pages/LandingPg";
import ChatBot from "./ChatbotComponents/chatbot";

function App() {
  const [Display, setDisplay] = useState("home");

  //   const [show, setShow] = useState(false);
  //   const [OrganizationLog, setOrganizationLog] = useState(false);
  //   const [candidateLog, setCandidateLog] = useState(false);
  //   const [isLogged, setIsLoggedIn] = useState(false);
  //   const [refresher, setRefresher] = useState(true);
  //   const cookies = new Cookies();

  //   useEffect(() => {
  //     const CheckAlreadyLogin = cookies.get("SmartToken");
  //     if (CheckAlreadyLogin) {
  //       setIsLoggedIn(true);
  //     }
  //   }, [refresher]);

  return (
    <div>
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}

      {Display === "home" ? (
        <LandingPg setDisplay={setDisplay} />
      ) : Display === "about" ? (
        <AboutUs setDisplay={setDisplay} />
      ) : Display === "chatbot" ? (
        <ChatBot setDisplay={setDisplay} />
      ) : (
        <></>
      )}

      {/* <ChatBot /> */}
      {/* <LandingPg /> */}
      {/* <AboutUs /> */}
      {/* {isLogged ? (
        OrganizationLog ? (
          <WithLoginOrganization
            OrganizationLog={OrganizationLog}
            setOrganizationLog={setOrganizationLog}
            candidateLog={candidateLog}
            setCandidateLog={setCandidateLog}
          />
        ) : (
          <WithLoginStudent
            OrganizationLog={OrganizationLog}
            setOrganizationLog={setOrganizationLog}
            candidateLog={candidateLog}
            setCandidateLog={setCandidateLog}
            refresher={refresher} setRefresher={setRefresher}


          />
        )
      ) : (
        <WithoutLogin
          show={show}
          setShow={setShow}
          OrganizationLog={OrganizationLog}
          setOrganizationLog={setOrganizationLog}
          candidateLog={candidateLog}
          setCandidateLog={setCandidateLog}
          isLogged={isLogged}
          setIsLoggedIn={setIsLoggedIn}
          refresher={refresher} setRefresher={setRefresher}
        />
      )} */}
    </div>
  );
}

export default App;
