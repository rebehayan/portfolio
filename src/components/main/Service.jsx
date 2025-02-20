import React, { useEffect, useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import { serviceList } from "../../data/service";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Service = forwardRef((_, ref) => {
  return (
    <section className="area" ref={ref}>
      <div className="grid tablet:grid-cols-2">
        <h2 className="font-[teko] mobile:text-4xl tablet:text-7xl mobile:leading-[1] font-extrabold text-pretty mobile:w-full tablet:w-96 uppercase">we make design that lead and inspire</h2>
        <ul className="mobile:mt-10 tablet:mt-0">
          {serviceList.map(({ link, linktext, title, subtitle, description, iconComponent }, index) => (
            <li key={index} className={`group ${index === 0 ? "mobile:pb-5 tablet:pb-10" : "border-t-[1px] border-gray-300 mobile:py-5 tablet:py-10"}`}>
              <Link to={link} rel="noopener noreferrer" className="group grid mobile:grid-cols-[min-content_1fr] tablet:grid-cols-[min-content_1fr_min-content] gap-x-5 gap-y-1">
                {React.createElement(iconComponent, { className: "w-15 h-15 mobile:row-[1/4] tablet:row-[1/3]" })}
                <strong className="font-[teko] text-3xl uppercase block">{title}</strong>
                <div className="w-[90%]">
                  <strong className="font-[base] font-medium transition-colors duration-300 group-hover:text-orange-700">{subtitle}</strong>
                  <p className="break-keep">{description}</p>
                  <div>{linktext}</div>
                </div>
                <span className="tablet:col-[3/4] tablet:row-[1/3] self-center w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-neutral-100 transition-all duration-500">
                  <HiArrowRight />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
export default Service;
