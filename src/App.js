// import Homepage from "./Homepage/Index";

import { useState } from "react";
import Features from "./pages/Features";
import Home from "./pages/Home";

function App() {
  const [home, setHome] = useState(true);

  return <>{home ? <Home setHome={setHome} /> : <Features />}</>;
}

export default App;
