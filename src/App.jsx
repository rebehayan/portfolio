import React from "react";
import PageRouter from "./PageRouter";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <PageRouter />
      {location.pathname !== "/" && <Footer />}
    </>
  );
}
