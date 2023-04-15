import { useState } from "react";
import Features from "./pages/Features";
import Home from "./pages/Home";

function App() {
  const [home, setHome] = useState(true);

  return (
    <>
      <div>{home ? <Home setHome={setHome} /> : <Features />}</div>
    </>
  );
}

export default App;
