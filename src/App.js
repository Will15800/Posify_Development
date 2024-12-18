import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubmitJob from "./pages/SubmitJob";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center *:w-full">
        <Header />
        <main className="w-full max-w-[900px] flex-1 flex flex-col *:flex-1 *:flex *:flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit-job" element={<SubmitJob />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;