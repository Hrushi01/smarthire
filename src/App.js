import Login from "./login/Decide";
import "./components/InterviewCam.css";
import { useState } from "react";
import WithLogin from "./Routing/WithLogin";

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
        <WithLogin/>
      ) : (
        <Login show={show} setShow={setShow} />
      )}
    </div>
  );
}

export default App;
