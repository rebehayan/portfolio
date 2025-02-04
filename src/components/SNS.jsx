import React from "react";
import { SNSList } from "../data/sns";

export default function SNS({ className }) {
  return (
    <ul className={className}>
      {SNSList.map(({ link, title, iconComponent, iconCSS }, index) => (
        <li key={index}>
          <a href={link} target="_blank" className="group block p-2" aria-label={title}>
            {React.createElement(iconComponent, { className: iconCSS })}
          </a>
        </li>
      ))}
    </ul>
  );
}
