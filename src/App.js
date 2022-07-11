import SequenceMemory from "./pages/SequenceMemory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen bg-[#EEE] font-mono text-center">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sequence" element={<SequenceMemory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
