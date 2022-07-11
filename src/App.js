import SequenceMemory from "./pages/SequenceMemory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen bg-slate-600 font-mono text-center p-4">
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
