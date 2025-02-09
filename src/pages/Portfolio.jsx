import React from "react";
import { projects } from "../data/portfolio";

export default function Portfolio() {
  return (
    <main className="portfolio">
      <div className="area">
        <form action="">
          <fieldset>
            <legend>포트폴리오 검색</legend>
            <input type="search" name="" id="" placeholder="search" title="포트폴리오 검색" />
            <select name="" id="">
              <option value="">Year</option>
            </select>
            <div className="results"></div>
          </fieldset>
        </form>
      </div>
      <div className="area">
        <ul className="font-[base] font-light">
          {projects.map(({ name, startDate, endDate, client, company, tag, contribution, url }, index) => (
            <li key={index} className={index === 0 ? "border-t-0" : "border-t-[1px] border-gray-300"}>
              <a href="" className="grid grid-cols-[1fr_minmax(min-content,7vw)_minmax(8rem,10vw)] gap-4 items-center py-4 px-2 hover:bg-gray-100 transition-colors duration-300">
                <div className="text-gray-700 font-medium">
                  {name}
                  <div className="mt-[1px] flex gap-1">
                    {tag.map((item, index) => (
                      <span key={index} className="bg-lime-200 rounded-md text-slate-900 px-2 py-[1px] text-xs font-light">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-gray-700 text-sm">{startDate}</div>
                <div className="text-gray-700 text-sm whitespace-nowrap">{client}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
