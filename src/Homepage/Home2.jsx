import React from 'react'

export default function Home2() {
    const [Display, setDisplay] = useState("home");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [OrganizationLog, setOrganizationLog] = useState(false);
  const [candidateLog, setCandidateLog] = useState(false);
  const [isLogged, setIsLoggedIn] = useState(false);
  const [refresher, setRefresher] = useState(true);
  const [signup, setSignup] = useState(false);
  const cookies = new Cookies();
  return (
    <div>


<div>
      <Homepage />
      {Display === "home" ? (
        
        <LandingPg setDisplay={setDisplay} />
      ) : Display === "about" ? (
        <AboutUs setDisplay={setDisplay} />
      ) : Display === "chatbot" ? (
        <ChatBot setDisplay={setDisplay} />
      ) : Display === "resumebuilder" ? (
        <ResumeBuilder setDisplay={setDisplay} />
      ) : Display === "interview" ? (
        isLogged ? (
          OrganizationLog ? (
            <WithLoginOrganization
              OrganizationLog={OrganizationLog}
              setOrganizationLog={setOrganizationLog}
              candidateLog={candidateLog}
              setCandidateLog={setCandidateLog}
              setSignup={setSignup}
            />
          ) : (
            <WithLoginStudent
              OrganizationLog={OrganizationLog}
              setOrganizationLog={setOrganizationLog}
              candidateLog={candidateLog}
              setCandidateLog={setCandidateLog}
              refresher={refresher}
              setRefresher={setRefresher}
            />
          )
        ) : (
          <WithoutLogin
            setDisplay={setDisplay}
            show={show}
            setShow={setShow}
            OrganizationLog={OrganizationLog}
            setOrganizationLog={setOrganizationLog}
            candidateLog={candidateLog}
            setCandidateLog={setCandidateLog}
            isLogged={isLogged}
            setIsLoggedIn={setIsLoggedIn}
            refresher={refresher}
            setRefresher={setRefresher}
            setStatus={setStatus}
            status={status}
            setSignup={setSignup}
            signup={signup}
          />
          // <WithLoginOrganization
          //   OrganizationLog={OrganizationLog}
          //   setOrganizationLog={setOrganizationLog}
          //   candidateLog={candidateLog}
          //   setCandidateLog={setCandidateLog}
          // />
        )
      ) : (
        <></>
      )}
    </div>
    </div>
  )
}
