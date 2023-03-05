import "./components/InterviewCam.css";
import { useState } from "react";
import WithLogin from "./Routing/WithLogin";
import WithoutLogin from "./Routing/WithoutLogin";
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
        <WithoutLogin show={show} setShow={setShow} />
      )}
    </div>
  );
}

export default App;
