import "./App.css";
import React from "react";
import PortofolioContainer from "./PortfolioContainer/PortofolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortofolioContainer />
    </div>
  );
}

export default App;
