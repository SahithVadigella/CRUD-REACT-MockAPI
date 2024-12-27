import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import Delete from "./components/delete";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
function App() {
  return (
    <Router>
      <div className="main">
        <h1>CRUD Operations</h1>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
