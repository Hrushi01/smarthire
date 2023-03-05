import React from "react";
import Fields from "./SignupFields";
import Navbar from "../login/Navbar";
import Conference from "../images/conference.png";

function Signup(props) {
  const { show, setShow } = props;
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="flex">
        <div className="w-2/5">
          <Fields show={show} setShow={setShow} />
        </div>
        <div className="flex justify-center items-center p-28">
          <img src={Conference} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
