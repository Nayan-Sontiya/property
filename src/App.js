// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import routes from "./routes";
import Properties from "./pages/Properties";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "20px", padding: "20px", width: "100%" }}>
          <Routes>
            <Route path={routes.HOME} element={<Users />} />
            <Route path={routes.USERS} element={<Users />} />
            <Route path={routes.PROPERTIES} element={<Properties />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
