import Navbar from "./components/Navbar";
import Login from "./login/Login";
import Candidate from "./pages/Candidate";
import { useState } from "react";
import InterviewCam from "./components/InterviewCam";

import "./components/InterviewCam.css";

function App() {
  const [show, setShow] = useState(false);
  const [Itr, setItr] = useState(true);

  return (
    <div>
      {show ? (
        <div className="bg-gray-100 flex h-full w-full ">
          <>
            <div className="bg-gray-100 flex h-full w-full ">
              <Navbar setItr={setItr} Itr={Itr} />
              {Itr ? <InterviewCam /> : <Candidate />}
            </div>
          </>
        </div>
      ) : (
        <Login show={show} setShow={setShow} />
      )}
    </div>
  );
}

export default App;
