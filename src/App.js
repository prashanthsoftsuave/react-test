import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
