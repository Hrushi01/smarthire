import Navbar from "./components/Navbar";
import Candidate from "./pages/Candidate";

function App() {
  return (
    <div className="bg-gray-100 flex h-full w-full ">
      <Navbar />
      <Candidate />
    </div>
  );
}

export default App;
