import Login from "./login/Login";
import "./components/InterviewCam.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {/* Smart hire cloned */}
      {show ? (
        <div className="bg-red-500 flex justify-center ">sucess</div>
      ) : (
        <Login show={show} setShow={setShow} />
      )}
    </div>
  );
}

export default App;
