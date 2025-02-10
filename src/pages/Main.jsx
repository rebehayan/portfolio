import { useEffect, useRef } from "react";
import "../App.css";
import Header from "../components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Visual from "../components/main/Visual";
import Introduce from "../components/main/Introduce";
import Service from "../components/main/Service";
import image from "../assets/visual.jpg";
import Footer from "../components/Footer";
import Portfolio from "../components/main/Portfolio";
import Opentalk from "../components/main/Opentalk";
import { useTitleHook } from "../utils/useTitleHook";

gsap.registerPlugin(ScrollTrigger);
// const headerAnimation = (selector, trigger) => {
//   gsap.fromTo(
//     selector.querySelector(".area > div"),
//     {
//       padding: "40px",
//     },
//     {
//       padding: "25px",
//       scrollTrigger: {
//         trigger: trigger,
//         start: "20% center",
//         end: "bottom center",
//         toggleActions: "play none none reverse",
//       },
//     }
//   );
// };
const heroAnimation = (selector, follow) => {
  gsap
    .timeline()
    .fromTo(
      follow,
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    )
    .fromTo(
      selector.querySelectorAll(".text1 div"),
      {
        x: -80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.7,
        ease: "circ.inOut",
      },
      "-=0.2"
    )
    .fromTo(
      selector.querySelector(".text2 > *:nth-child(1)"),
      {
        y: -100,
        rotate: 180,
        opacity: 0,
        scale: 0.4,
      },
      {
        y: 0,
        rotate: 45,
        opacity: 1,
        scale: 1,
        ease: "circ.inOut",
      },
      "-=0.2"
    )
    .fromTo(
      selector.querySelector(".text2 > *:nth-child(2)"),
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "circ.inOut",
      },
      "<"
    )
    .fromTo(
      selector.querySelector(".text2 > *:nth-child(3)"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "circ.inOut",
      },
      "-=0.2"
    )
    .fromTo(
      selector.querySelector(".image"),
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "circ.inOut",
      },
      "-=0.3"
    );
};
const serviceAnimation = (selector) => {
  const titleRef = selector.querySelector("h2");
  const liRef = selector.querySelectorAll("li");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: selector,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    })
    .fromTo(
      titleRef,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    )
    .fromTo(
      liRef,
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
      }
    );
};
const imageAnimation = (selector, target) => {
  gsap.fromTo(
    selector.querySelector("img"),
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: target,
        start: "40% center",
        toggleActions: "play none none none",
      },
    }
  );
};
const portfolioAnimation = (selector) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: selector,
        start: "top center",
        toggleActions: "play none none none",
        ease: "power2.inOut",
      },
    })
    .fromTo(
      selector.querySelector("h2"),
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
      selector.querySelector("ul"),
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    )
    .fromTo(
      selector.querySelectorAll("li div"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: {
          each: 0.2,
          from: "random",
        },
      }
    )
    .fromTo(
      selector.querySelectorAll(".slide > *"),
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.7,
      },
      "<"
    );
};
const openTalkAnimation = (selector) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: selector,
        start: "-50% center",
        toggleActions: "play none none none",
        ease: "power2.inOut",
      },
    })
    .fromTo(
      selector.querySelector("h2"),
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
      selector.querySelector("p"),
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    )
    .fromTo(
      selector.querySelectorAll("a"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      }
    );
};
const footerAnimation = (selector, target, sns) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        start: "80% center",
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
function Main() {
  // const headerRef = useRef();
  const followRef = useRef();
  const triggerRef = useRef();
  const serviceRef = useRef();
  const imageRef = useRef();
  const portfolioRef = useRef();
  const opentalkRef = useRef();
  const footerRef = useRef();
  const snsRef = useRef();

  useEffect(() => {
    heroAnimation(triggerRef.current, followRef.current);
    // headerAnimation(headerRef.current, triggerRef.current);
    serviceAnimation(serviceRef.current);
    imageAnimation(imageRef.current, serviceRef.current);
    portfolioAnimation(portfolioRef.current);
    openTalkAnimation(opentalkRef.current);
    footerAnimation(footerRef.current, portfolioRef.current, snsRef.current);
  }, []);

  useTitleHook();
  return (
    <>
      {/* <Header ref={headerRef} /> */}
      <div ref={triggerRef}>
        <Visual chilrenRef={followRef} />
        <Introduce />
        <Service ref={serviceRef} />
        <div className="area" ref={imageRef}>
          <div>
            <img src={image} alt="" className="w-full object-cover aspect-video" />
          </div>
        </div>
        <Portfolio ref={portfolioRef} />
        <Opentalk ref={opentalkRef} />
      </div>
      <Footer ref={footerRef} childrenRef={snsRef} />
    </>
  );
}

export default Main;
