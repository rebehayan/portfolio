import React from "react";
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";

const GNB = forwardRef((_, ref) => {
  const location = useLocation();

  return (
    <nav className="mobile:hidden tablet:block" ref={ref}>
      <ul className="flex gap-5">
        <li>
          <Link to="/about" className={`${location.pathname === "/about" ? "uppercase text-2xl font-[teko] text-cyan-700" : "uppercase text-2xl font-[teko]"}`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={`${location.pathname === "/portfolio" ? "uppercase text-2xl font-[teko] text-cyan-700" : "uppercase text-2xl font-[teko]"}`}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/education" className={`${location.pathname === "/education" ? "uppercase text-2xl font-[teko] text-cyan-700" : "uppercase text-2xl font-[teko]"}`}>
            Education
          </Link>
        </li>
        <li>
          <Link to="/service" className={`${location.pathname === "/service" ? "uppercase text-2xl font-[teko] text-cyan-700" : "uppercase text-2xl font-[teko]"}`}>
            Product
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`${location.pathname === "/contact" ? "uppercase text-2xl font-[teko] text-cyan-700" : "uppercase text-2xl font-[teko]"}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
});

export default GNB;
