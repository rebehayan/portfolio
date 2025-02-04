import React from "react";
import SNS from "./SNS";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="area">
      <div className="mobile:grid tablet:flex mobile:justify-center tablet:justify-between items-center">
        <span className="font-[teko] text-xl leading-[1] mobile:text-center tablet:text-left">&copy; 2000-{year} Rebehayan</span>
        <SNS className={"flex gap-0.5 leading-0"} />
      </div>
    </footer>
  );
}
