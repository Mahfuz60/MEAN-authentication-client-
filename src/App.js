import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
