import React, { forwardRef, useEffect, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import GNB from "./GNB";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Header = forwardRef((_, ref) => {
  const h1Ref = useRef();
  const gnbRef = useRef();

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
    <header ref={ref}>
      <div className="area">
        <div className=" flex justify-between">
          <h1 ref={h1Ref}>
            <Link to="/">
              <img src="/logo.svg" alt="Rebehayan" className="w-17" />
            </Link>
          </h1>
          <GNB ref={gnbRef} />
          <button className="mobile:block tablet:hidden" aria-label="메뉴">
            <CiMenuFries />
          </button>
        </div>
      </div>
    </header>
  );
});

export default Header;
