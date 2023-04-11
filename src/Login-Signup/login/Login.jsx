import React from "react";
import Fields from "./Fields";
import Conference from "./images/conference.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function Login(props) {
  const {
    setDisplay,
    candidateLog,
    OrganizationLog,
    isLogged,
    setIsLoggedIn,
    refresher,
    setRefresher,
    status = { status },
  } = props;
  const { show, setShow } = props;
  console.log("vvvvvvvvv", OrganizationLog, candidateLog);

  return (
    <div>
      <div className="">
        <Header setDisplay={setDisplay} />
      </div>
      <div className="flex">
        <div className="w-2/5">
          Hrushi-1
          <Fields
            show={show}
            setShow={setShow}
            setCandidateLog={candidateLog}
            setOrganizationLog={OrganizationLog}
            isLogged={isLogged}
            setIsLoggedIn={setIsLoggedIn}
            refresher={refresher}
            setRefresher={setRefresher}
            status={status}
          />
        </div>
        <div className="flex justify-center items-center p-28">
          <img src={Conference} alt="img" />
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
}
export default Login;