import React, { useEffect, useRef, useState } from "react";
import PageRouter from "./PageRouter";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideMenu from "./components/SlideMenu";

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
        start: "800px center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      onComplete() {
        if (respon < 1024) selector.classList.add("shadow-md");
      },
      onReverseComplete() {
        if (respon < 1024) selector.classList.remove("shadow-md");
      },
    }
  );
};
const footerAnimation = (selector, target, sns) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: selector,
        start: "top bottom",
        toggleActions: "play none none none",
        ease: "power2.inOut",
      },
    })
    .fromTo(
      selector.querySelector("span"),
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    )
    .fromTo(
      sns.querySelectorAll("li"),
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
      },
      "<"
    );
};
export default function App() {
  const location = useLocation();
  const headerRef = useRef();
  const triggerRef = useRef();
  const footerRef = useRef();
  const snsRef = useRef();

  useEffect(() => {
    headerAnimation(headerRef.current, triggerRef.current, window.innerWidth);
    footerAnimation(footerRef.current, triggerRef.current, snsRef.current);
  }, [location]);

  return (
    <>
      <Header ref={headerRef} />
      <main ref={triggerRef}>
        <PageRouter />
      </main>
      <Footer ref={footerRef} childrenRef={snsRef} />
      <SlideMenu />
    </>
  );
}
