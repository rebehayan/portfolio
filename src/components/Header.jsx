import React, { forwardRef, useEffect, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import GNB from "./GNB";
import gsap from "gsap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useGNB } from "../store/navigation";

const Header = forwardRef((_, ref) => {
  const h1Ref = useRef();
  const gnbRef = useRef();
  const { setGNB } = useGNB();

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        h1Ref.current,
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
        gnbRef.current.querySelectorAll("li"),
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.3,
        },
        "<"
      );
  }, []);

  return (
    <header ref={ref} className="fixed left-0 right-0 top-0 bg-white z-[1000] dark:bg-neutral-950 transition-shadow duration-500">
      <div className="area">
        <div className=" flex justify-between  box-border">
          <h1 ref={h1Ref}>
            <Link to="/">
              <img src={logo} alt="Rebehayan" className="w-17" />
            </Link>
          </h1>
          <GNB ref={gnbRef} className="mobile:hidden tablet:block" />
          <button className="mobile:block tablet:hidden cursor-pointer" aria-label="메뉴" onClick={() => setGNB()}>
            <CiMenuFries />
          </button>
        </div>
      </div>
    </header>
  );
});

export default Header;
