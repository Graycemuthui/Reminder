import React from "react";
import Dashboard from "./components/Dashboard";
import NavigationMenu from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <NavigationMenu />
      <Dashboard />
    </div>
  );
};

export default App;
