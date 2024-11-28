import { useState } from "react";
import Question from "./components/Question";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Question />
      <Footer />
    </>
  );
}

export default App;
