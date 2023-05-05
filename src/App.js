import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import WithoutLogin from "./Routing/WithoutLogin.jsx";
import WithLogin from "./Routing/WithLogin";

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);

  const [status, setStatus] = useState("student");

  return (
    <>
      <BrowserRouter>
        {isLogged ? (
          <WithLogin
            setStatus={setStatus}
            status={status}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <WithoutLogin
            setStatus={setStatus}
            status={status}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
