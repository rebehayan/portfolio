import React from "react";
import { gnbData } from "../data/gnb.js";
import { forwardRef } from "react";

const GNB = forwardRef((_, ref) => {
  return (
    <nav className="mobile:hidden tablet:block" ref={ref}>
      <ul className="flex gap-5">
        {gnbData.map(({ title, link }, index) => (
          <li key={index}>
            <a href={link} className="uppercase text-2xl font-[teko]">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default GNB;
