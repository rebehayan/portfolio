import React, { forwardRef } from "react";
import { SNSList } from "../data/sns";

const SNS = forwardRef(({ className }, ref) => {
  return (
    <ul className={"sns-list " + className} ref={ref}>
      {SNSList.map(({ link, title, iconComponent, iconCSS }, index) => (
        <li key={index}>
          <a href={link} target="_blank" className="group block p-2" aria-label={title}>
            {React.createElement(iconComponent, { className: iconCSS })}
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
});

export default SNS;
