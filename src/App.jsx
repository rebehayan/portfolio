import React, { useEffect, useRef, useState } from "react";
import PageRouter from "./PageRouter";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const headerAnimation = (selector, trigger, respon) => {
  gsap.fromTo(
    selector.querySelector(".area > div"),
    {
      padding: respon < 1024 ? "25px" : "40px",
    },
    {
      padding: respon < 1024 ? "15px" : "25px",
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
  const [isWidth, setIsWidth] = useState("");
  const headerRef = useRef();
  const triggerRef = useRef();
  console.log(isWidth);

  useEffect(() => {
    headerAnimation(headerRef.current, triggerRef.current, isWidth);
    setIsWidth((isWidth) => (isWidth == window.innerWidth ? isWidth : window.innerWidth));
  }, [location]);

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
