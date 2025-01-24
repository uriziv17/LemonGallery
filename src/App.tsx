import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import GalleryPage from "./components/GaleryPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
