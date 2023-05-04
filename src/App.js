import { useState } from "react";
import Features from "./pages/Features";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [home, setHome] = useState(true);
  const [isLogged, setIsLoggedIn] = useState(true);
  return (
    <>
      <div>{home ? <Home setHome={setHome} /> : <Features />}</div>
      <BrowserRouter>
      
        {isLogged ? (
          <WithLogin refresher={refresher} setRefresher={setRefresher}/>
        ) : (
          <WithoutLogin isLogged={isLogged} setIsLoggedIn={setIsLoggedIn} />
        )}
    
    </BrowserRouter>
    </>
  );
}

export default App;
