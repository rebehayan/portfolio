import React, { forwardRef } from "react";
import SNS from "./SNS";

const year = new Date().getFullYear();

const Footer = forwardRef(({ childrenRef }, ref) => {
  return (
    <footer className="area dark:bg-neutral-950 dark:text-stone-300" ref={ref}>
      <div className="mobile:grid tablet:flex mobile:justify-center tablet:justify-between items-center">
        <span className="font-[teko] text-xl leading-[1] mobile:text-center tablet:text-left">&copy; 2000-{year} Rebehayan</span>
        <SNS ref={childrenRef} className={"flex gap-1 leading-0"} />
      </div>
    </footer>
  );
});

export default Footer;
