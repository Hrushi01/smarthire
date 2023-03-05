import React from "react";
import InterviewShow from "../Student/InterviewShow";
import Cookies from "universal-cookie";

function WithLoginStudent(Props) {
  const cookies = new Cookies();
  const handleLogoutFunction = () => {
    cookies.remove("SmartToken");
    window.location.reload();
  };
  return (
    <>
      {" "}
      <div>
        <InterviewShow />
      </div>
      <button onClick={()=>{handleLogoutFunction()}}>Logout</button>
    </>
  );
}

export default WithLoginStudent;
