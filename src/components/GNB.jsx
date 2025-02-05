import React from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const GNB = forwardRef((_, ref) => {
  return (
    <nav className="mobile:hidden tablet:block" ref={ref}>
      <ul className="flex gap-5">
        <li>
          <Link to="/about" className="uppercase text-2xl font-[teko]">
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="uppercase text-2xl font-[teko]">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="uppercase text-2xl font-[teko]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
});

export default GNB;
