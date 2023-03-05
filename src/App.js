import "./components/InterviewCam.css";
import { useState } from "react";
import WithLoginOrganization from "./Routing/WithLoginOrganization";
import WithoutLogin from "./Routing/WithoutLogin";
import WithLoginStudent from "./Routing/WithLoginStudent";
function App() {
  const [show, setShow] = useState(false);
  const [OrganizationLog, setOrganizationLog] = useState(false);
  const [candidateLog, setCandidateLog] = useState(false);

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
        />
      )}
    </div>
  );
}

export default App;
