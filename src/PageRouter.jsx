import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Service from "./pages/Service";

export default function PageRouter() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // if (location.pathname.includes("portfolio")) {
    //   document.body.classList.add("dark");
    // } else {
    //   document.body.classList.remove("dark");
    // }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
