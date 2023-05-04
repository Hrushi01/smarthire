import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import WithoutLogin from "./Routing/WithoutLogin.jsx";
import WithLogin from "./Routing/WithLogin";

function App() {
  const [home, setHome] = useState(true);
  const [isLogged, setIsLoggedIn] = useState(true);
  const [status, setStatus] = useState("org");

  return (
    <>
      {/* <div>{home ? <Home setHome={setHome} /> : <Features />}</div> */}
      <BrowserRouter>
        {isLogged ? (
          <WithLogin setStatus={setStatus} status={status} />
        ) : (
          <WithoutLogin setStatus={setStatus} status={status} />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
