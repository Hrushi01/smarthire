import React from "react";
import Fields from "./Fields";
import Navbar from "./Navbar";
import Conference from "../images/conference.png";

function Login(props) {
  const { candidateLog, OrganizationLog, isLogged, setIsLoggedIn,refresher, setRefresher } = props;
  const { show, setShow } = props;
  console.log("vvvvvvvvv", OrganizationLog ,candidateLog);

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="flex">
        <div className="w-2/5">
          <Fields
            show={show}
            setShow={setShow}
            setCandidateLog={candidateLog}
            setOrganizationLog={OrganizationLog}
            isLogged={isLogged}
            setIsLoggedIn={setIsLoggedIn}  
            refresher={refresher} setRefresher={setRefresher}
          />
        </div>
        <div className="flex justify-center items-center p-28">
          <img src={Conference} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Login;
