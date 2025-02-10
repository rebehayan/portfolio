import React, { useEffect, useRef } from "react";
import PageRouter from "./PageRouter";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const headerAnimation = (selector, trigger) => {
  gsap.fromTo(
    selector.querySelector(".area > div"),
    {
      padding: "40px",
    },
    {
      padding: "25px",
      scrollTrigger: {
        trigger: trigger,
        start: "20% center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export default function App() {
  const location = useLocation();
  const headerRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    headerAnimation(headerRef.current, triggerRef.current);
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <main ref={triggerRef}>
        <PageRouter />
      </main>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}
