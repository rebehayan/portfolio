import React from "react";
import { projects } from "../data/portfolio";

const options = () => {
  const result = projects.map((item) => {
    return item.startDate.slice(0, 4);
  });
  return [...new Set(result)];
};

export default function Portfolio() {
  const optionList = options();
  return (
    <main className="portfolio">
      <div className="area">
        <form action="">
          <fieldset className="flex gap-2">
            <legend>포트폴리오 검색</legend>
            <input type="search" name="" id="" placeholder="search" title="포트폴리오 검색" />
            <strong>연도선택</strong>
            <div className="flex gap-3">
              {optionList.map((item, index) => (
                <button type="button" key={index} className="cursor-pointer">
                  {item}
                </button>
              ))}
            </div>
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
                    {tag.map(({ role, className }, index) => (
                      <span key={index} className={className}>
                        {role}
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
