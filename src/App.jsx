import { useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Visual from "./components/main/Visual";
import Introduce from "./components/main/Introduce";
import Service from "./components/main/Service";
import image from "./assets/visual.jpg";
import { FaQuoteRight } from "react-icons/fa";
import Footer from "./components/Footer";
import Portfolio from "./components/main/Portfolio";
import Opentalk from "./components/main/Opentalk";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef();
  const triggerRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        position: "static",
        left: 0,
        top: 0,
        right: 0,
        zIndex: 1000,
      },
      {
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        backgroundColor: "#fff",
        zIndex: 1000,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <Visual ref={triggerRef} />
      <Introduce />
      <Service />
      <div className="area aa">
        <div>
          <img src={image} alt="" className="w-full object-cover aspect-video" />
        </div>
      </div>
      <Portfolio />
      <Opentalk />
      <Footer />
    </>
  );
}

export default App;
